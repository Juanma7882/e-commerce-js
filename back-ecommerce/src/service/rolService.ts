import { ObtenerRolDTO } from "../dto/rol/obtener-rol.dto";
import { RolDTO } from "../dto/rol/rol.dto";
import Rol from "../models/rol";

class RolService {


    async obtenerRol(filter: ObtenerRolDTO): Promise<{ rol: RolDTO }> {
        try {
            if (!filter.id && !filter.nombre)
                throw new Error("debe proporcionar un parámetro válido: id o nombre");

            const rol = await Rol.findOne({
                where: {
                    ...(filter.id && { id: filter.id }),
                    ...(filter.nombre && { nombre: filter.nombre })
                }
            });
            if (!rol) throw new Error("rol no encontrado");

            return {
                rol: {
                    id: rol.id,
                    nombre: rol.nombre,
                    descripcion: rol.descripcion
                }
            };

        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error("hubo un error al encontrar el rol: " + message);
        }
    }

    async listaDeRoles(): Promise<{ roles: RolDTO[] }> {
        try {
            const roles = await Rol.findAll();
            if (!roles.length) throw new Error("no se encontraron roles");

            return {
                roles: roles.map(rol => ({
                    id: rol.id,
                    nombre: rol.nombre,
                    descripcion: rol.descripcion
                }))
            };

        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error("hubo un error al obtener los roles: " + message);
        }
    }
}
export default RolService