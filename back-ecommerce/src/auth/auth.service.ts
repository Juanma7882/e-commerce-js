import { LoginUsuarioDTO } from "../dto/auth/login-usuario.dto";
import { LoginResponseDTO } from "../dto/auth/login-response.dto";
import { RefreshTokenDTO } from "../dto/auth/refresh-token.dto";
import { comparePassword } from "../utils/password";
import { generarAccessToken, generarRefreshToken } from "../utils/jwt";
import { RefreshTokenPayload, validateRol } from "../types/jwt";
import UnauthorizedError from "../custom-errors/http-errors/UnauthorizedError";
import NotFountError from "../custom-errors/http-errors/NotFoundError";
import { verifyToken } from "../utils/Token";
import { hashToken } from "../utils/hashToken";
import ServiceRefreshSession from "../service/refreshSessionService";
import UsuarioService from "../service/usuarioService";

class AuthService {

    /**
     * The function `login` in TypeScript handles user authentication by verifying credentials,
     * generating access and refresh tokens, and returning user information.
     * @param {LoginUsuarioDTO} data - The `data` parameter in the `async login` function is of type
     * `LoginUsuarioDTO`, which likely contains the user's email and password for authentication. It is
     * used to find the user in the database and validate their credentials during the login process.
     * @returns The `login` function returns a `Promise` that resolves to a `LoginResponseDTO` object.
     * This object contains the following properties:
     * - `user`: An object with the user's information including `id`, `nombre`, and `email`.
     * - `accessToken`: A token generated for authentication purposes.
     * - `refreshToken`: A token generated for refreshing the access token.
     */
    async login(data: LoginUsuarioDTO, req: Request): Promise<LoginResponseDTO> {

        const usuarioService = new UsuarioService();

        const respuesta = await usuarioService.ObtenerUsuarioLogin({ email: data.email });

        if (!respuesta) {
            throw new UnauthorizedError("Credenciales inválidas usuario o contraseña incorrecta incorrecta");
        }

        const passwordOk = await comparePassword(
            data.password,
            respuesta.usuario.password
        );

        if (!passwordOk) {
            throw new UnauthorizedError("Credenciales inválidas usuario o contraseña incorrecta incorrecta");
        }

        const rol = respuesta.usuario.rol

        if (!rol) {
            throw new NotFountError("Credenciales inválidas");
        }


        const accessToken = generarAccessToken({
            id: respuesta.usuario.id,
            email: respuesta.usuario.email,
            rol: validateRol(rol),
        });

        const refreshToken = generarRefreshToken({
            id: respuesta.usuario.id,
            email: respuesta.usuario.email,
        });

        const tokenHash = hashToken(refreshToken)

        const serviceRefreshSession = new ServiceRefreshSession()

        const forwarded = req.headers.get("x-forwarded-for");
        const ipAddress = forwarded ? forwarded.split(',')[0] : "127.0.0.1";

        await serviceRefreshSession.crear({
            usuarioId: respuesta.usuario.id,
            tokenHash,
            fingerprint: req.headers.get("x-device-id") || "unknown",
            deviceInfo: req.headers.get("user-agent") || "unknown",
            ipAddress: ipAddress || "unknown",
            userAgent: req.headers.get("user-agent") || "unknown",
        });

        return {
            user: {
                id: respuesta.usuario.id,
                nombre: respuesta.usuario.nombre,
                email: respuesta.usuario.email,
            },
            accessToken,
            refreshToken,
        };
    }


    /**
     * The `refresh` function in TypeScript verifies a refresh token, checks its validity, and
     * generates a new access token for a user.
     * @param {RefreshTokenDTO} data - The `data` parameter in the `refresh` function is of type
     * `RefreshTokenDTO`, which likely contains the refresh token needed to generate a new access
     * token. This refresh token is decoded using a JWT verification process to extract the payload
     * information.
     * @returns The `refresh` function returns a Promise that resolves to an object containing the
     * `accessToken` string.
     */
    async refresh(data: RefreshTokenDTO, req: Request): Promise<{ accessToken: string, refreshToken: string }> {

        const decoded = verifyToken<RefreshTokenPayload>(data.refreshToken)

        if (decoded.type !== "refresh") {
            throw new UnauthorizedError("Token inválido");
        }

        const tokenHash = hashToken(data.refreshToken)
        const serviceRefreshSession = new ServiceRefreshSession();
        const sesion = await serviceRefreshSession.findByTokenHash(tokenHash);

        if (!sesion) {
            throw new UnauthorizedError("Token inválido");
        }

        if (sesion.revoked) {
            await serviceRefreshSession.revocarTodasLasSesiones(sesion.usuarioId);
            throw new UnauthorizedError("Reuso de token detectado, sesiones revocadas");
        }

        if (new Date() > sesion.expiresAt) {
            throw new UnauthorizedError("Token expirado");
        }

        const newFingerprint = req.headers.get("x-device-id") || "unknown"
        if (newFingerprint !== sesion.fingerprint) {
            throw new UnauthorizedError("sesion no valida")
        }

        const usuarioService = new UsuarioService();
        const respuesta = await usuarioService.ObtenerUsuarioLogin({ email: decoded.email });

        if (!respuesta) {
            throw new NotFountError("Usuario no existe");
        }

        const accessToken = generarAccessToken({
            id: respuesta.usuario.id,
            email: respuesta.usuario.email,
            rol: validateRol(respuesta.usuario.rol)
        });

        const refreshToken = generarRefreshToken({
            id: respuesta.usuario.id,
            email: respuesta.usuario.email,
        });

        const nuevoTokenHash = hashToken(refreshToken);

        await serviceRefreshSession.revocarSesion(sesion.id, nuevoTokenHash);

        const forwarded = req.headers.get("x-forwarded-for");
        const ipAddress = forwarded ? forwarded.split(',')[0] : "127.0.0.1";

        await serviceRefreshSession.crear({
            usuarioId: respuesta.usuario.id,
            tokenHash: nuevoTokenHash,
            fingerprint: req.headers.get("x-device-id") || "unknown",
            deviceInfo: req.headers.get("user-agent") || "unknown",
            ipAddress: ipAddress || "unknown",
            userAgent: req.headers.get("user-agent") || "unknown",
        });

        return {
            accessToken,
            refreshToken
        };
    }

    // cierra la de un solo dispositivo
    async logout(refreshToken: string): Promise<void> {
        const tokenHash = hashToken(refreshToken)
        const serviceRefreshSession = new ServiceRefreshSession();
        await serviceRefreshSession.revocarSesionDeUnDispositivo(tokenHash);
    }

    // cierra todas las sesiones abiertas
    async logoutAll(usuarioId: number): Promise<void> {
        const serviceRefreshSession = new ServiceRefreshSession();
        await serviceRefreshSession.revocarTodasLasSesiones(usuarioId);
    }
}

export default AuthService;
