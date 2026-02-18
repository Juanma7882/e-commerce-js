import Usuario from "../models/usuario";
import { hashPassword } from "../utils/password";
import { CrearUsuarioDTO } from "../dto/usuario/crear-usuario.dto";
import { UsuarioResponseDTO } from "../dto/usuario/usuario-response.dto";
import { ObtenerUsuarioPorDTO } from "../dto/usuario/obtener-usuario.dto";
import { ObtenerListaUsuariosDTO } from "../dto/usuario/obtener-lista-usuarios.dto";
import { ListarUsuariosDTO } from "../dto/usuario/listar-usuarios.dto";
import { ActualizarUsuarioDTO } from "../dto/usuario/actualizar-usuario.dto"
import Rol from "../models/rol";
import { UsuarioResponseSimpleDTO } from "../dto/usuario/usuario-response-simple";

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
                rolId: data.rolId,
                nombre: data.nombre,
                apellido: data.apellido,
                email: data.email,
                dni: data.dni,
                telefono: data.telefono,
                password: passwordHasheada
            });

            await usuario.reload({
                include: [{ model: Rol, attributes: ["nombre"] }]
            });

            return {
                id: usuario.id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                rol: usuario.Rol?.nombre ?? "unknown"
            };
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error("Error al crear el usuario: " + message);
        }
    }

    async ObtenerUsuarioPor(filtro: ObtenerUsuarioPorDTO): Promise<{ mensaje: string, usuario: UsuarioResponseDTO }> {
        try {
            if (!filtro.id && !filtro.email) {
                throw new Error("Debe proporcionar id o email");
            }
            const usuario = await Usuario.findOne({
                where: {
                    ...(filtro.id && { id: filtro.id }),
                    ...(filtro.email && { email: filtro.email }),
                },
                include: [
                    {
                        model: Rol,
                        attributes: ["id", "nombre", "descripcion"]
                    }
                ]
            });

            if (!usuario) {
                throw new Error("usuario no encontrado");
            }

            return {
                mensaje: "usuario encontrado",
                usuario: {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    email: usuario.email,
                    rol: usuario.Rol?.nombre ?? "unknown"
                }

            }
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error("Error al crear el usuario: " + message);
        }
    }

    async listarUsuarios(filtros: ObtenerListaUsuariosDTO): Promise<ListarUsuariosDTO> {

        try {
            const pagina = filtros.pagina ?? 1;
            const limit = filtros.limit ?? 10;
            const offset = (pagina - 1) * limit;

            const where: { email?: string; nombre?: string } = {
                ...(filtros.email && { email: filtros.email }),
                ...(filtros.nombre && { nombre: filtros.nombre }),
            };

            const include = [
                {
                    model: Rol,
                    attributes: ["id", "nombre", "descripcion"]
                }
            ]

            const { rows, count } = await Usuario.findAndCountAll({
                where,
                include,
                limit,
                offset,
                order: [["createdAt", "DESC"]],
            });

            return {
                total: count,
                pagina,
                limit,
                usuarios: rows.map(usuario => ({
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    email: usuario.email,
                    rol: usuario.Rol?.nombre ?? "unknown"
                })),
            };

        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error("Error al listar usuarios: " + message);
        }
    }

    async actualizarUsuario(data: ActualizarUsuarioDTO): Promise<UsuarioResponseSimpleDTO> {
        try {
            const usuario = await Usuario.findByPk(data.id);

            if (!usuario) {
                throw new Error("Usuario no encontrado");
            }

            await usuario.update({
                nombre: data.nombre ?? usuario.nombre,
                apellido: data.apellido ?? usuario.apellido,
                telefono: data.telefono ?? usuario.telefono,
            });

            return {
                id: usuario.id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
            };
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error("Error al actualizar el usuario: " + message);
        }
    }

    async eliminarUsuario(id: number): Promise<{ mensaje: string, usuario: UsuarioResponseSimpleDTO }> {
        try {
            if (!id) {
                throw new Error("el ID tiene un valor null")
            }

            const usuario = await Usuario.findByPk(id)

            if (!usuario) {
                throw new Error("usuario no encontrado")
            }

            return {
                mensaje: "usuario eliminado exitosamente",
                usuario: {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    email: usuario.email,
                }
            }

        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error("Error al crear el usuario: " + message);
        }
    }



}

export default UsuarioService;
