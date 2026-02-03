import Usuario from "../models/usuario";
import { generarAccessToken, generarRefreshToken } from "../utils/jwt";
import { hashPassword, comparePassword } from "../utils/password";

import { CrearUsuarioDTO } from "../dto/usuario/crear-usuario.dto";
import { LoginUsuarioDTO } from "../dto/usuario/login-usuario.dto";
import { UsuarioResponseDTO } from "../dto/usuario/usuario-response.dto";
import { LoginResponseDTO } from "../dto/usuario/login-response.dto"

class UsuarioService {

    async crearUsuarioDTO(data: CrearUsuarioDTO): Promise<UsuarioResponseDTO> {

        try {

            const usuarioExistente = await Usuario.findOne({
                where: { email: data.email }
            });

            if (usuarioExistente) {
                throw new Error("El usuario ya existe");
            }

            const passwordHasheada = await hashPassword(data.password);

            const usuario = await Usuario.create({
                nombre: data.nombre,
                apellido: data.apellido,
                email: data.email,
                password: passwordHasheada,
                telefono: data.telefono,
                provincia: data.provincia,
                localidad: data.localidad,
                codigo_postal: data.codigo_postal,
                direccion: data.direccion,
            });

            return {
                id: usuario.id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
            };
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error("Error al crear el usuario: " + message);
        }
    }

    /**
     * 
     * @param data 
     * @returns 
     */
    async login(data: LoginUsuarioDTO): Promise<LoginResponseDTO> {

        const usuario = await Usuario.findOne({
            where: { email: data.email }
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

        //! agregar el rol del usuario al payload del token admin y user
        const accessToken = generarAccessToken({
            id: usuario.id,
            email: usuario.email,
        });

        const refreshToken = generarRefreshToken({
            id: usuario.id,
            email: usuario.email,
        });

        return {
            user: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email
            },
            accessToken,
            refreshToken,
        };
    }
}

export default UsuarioService;
