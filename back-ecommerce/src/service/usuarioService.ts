import Usuario from "../models/usuario";
import { CrearUsuarioDTO } from "../dto/usuario/crear-usuario.dto";
import { LoginUsuarioDTO } from "../dto/usuario/login-usuario.dto";
import { UsuarioResponseDTO } from "../dto/usuario/usuario-response.dto";
import { hashPassword, comparePassword } from "../utils/password";
import { generarToken } from "../utils/jwt";

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


    async login(
        data: LoginUsuarioDTO
    ): Promise<{ token: string }> {

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

        const token = generarToken({
            id: usuario.id,
            email: usuario.email,
        });

        return { token };
    }
}

export default UsuarioService;
