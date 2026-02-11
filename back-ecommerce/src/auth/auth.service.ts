import jwt from "jsonwebtoken";
import Usuario from "../models/usuario";
import { LoginUsuarioDTO } from "../dto/auth/login-usuario.dto";
import { LoginResponseDTO } from "../dto/auth/login-response.dto";
import { RefreshTokenDTO } from "../dto/auth/refresh-token.dto";
import { comparePassword } from "../utils/password";
import { generarAccessToken, generarRefreshToken } from "../utils/jwt";
import { RefreshTokenPayload } from "../types/jwt";
import Rol from "../models/rol";

class AuthService {

    // ======================
    // LOGIN
    // ======================


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
    async login(data: LoginUsuarioDTO): Promise<LoginResponseDTO> {

        // const usuario = await Usuario.findOne({
        //     where: { email: data.email },
        // });

        const usuario = await Usuario.findOne({
            where: { email: data.email },
            include: [{
                model: Rol,
                as: 'rol', // ⚠️ Debe coincidir con el alias definido en la relación
                attributes: ['id', 'nombre'] // Solo trae los campos que necesitas
            }]
        });

        if (!usuario) {
            throw new Error("Credenciales inválidas");
        }

        const passwordOk = await comparePassword(
            data.password,
            usuario.password
        );

        if (!passwordOk) {
            throw new Error("Credenciales inválidas");
        }

        const rolNombre = usuario.rol?.nombre
        console.log("rolNombre", rolNombre)
        const accessToken = generarAccessToken({
            id: usuario.id,
            email: usuario.email,
            rol: rolNombre
        });

        const refreshToken = generarRefreshToken({
            id: usuario.id,
            email: usuario.email,
        });

        return {
            user: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
            },
            accessToken,
            refreshToken,
        };
    }

    // ======================
    // REFRESH TOKEN
    // ======================

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
    async refresh(data: RefreshTokenDTO): Promise<{ accessToken: string }> {

        const decoded = jwt.verify(
            data.refreshToken,
            process.env.JWT_SECRET!
        ) as RefreshTokenPayload;

        if (decoded.type !== "refresh") {
            throw new Error("Token inválido");
        }

        const usuario = await Usuario.findByPk(decoded.id);
        if (!usuario) {
            throw new Error("Usuario no existe");
        }

        //! 🛑 Invalidación global 🛑
        if (
            decoded.iat &&
            decoded.iat * 1000 <
            new Date(usuario.tokenValidAfter).getTime()
        ) {
            throw new Error("Refresh token invalidado");
        }

        const accessToken = generarRefreshToken({
            id: usuario.id,
            email: usuario.email,
        });

        return { accessToken };
    }
}

export default AuthService;
