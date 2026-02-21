import { where } from "sequelize";
import ProvinciaDTO from "../dto/provincia/provincia.dto";
import Provincia from "../models/provincia";

class ProvinciaService {

    async ObtenerTodasLasProvincias(): Promise<{ provincias: ProvinciaDTO[], cantidadDeProvincias: number }> {
        try {

            const { rows: provincias, count: cantidadDeProvincias } = await Provincia.findAndCountAll({
                attributes: ['id', 'nombre'],
            })
            return {
                provincias,
                cantidadDeProvincias,
            }
        } catch (error) {
            throw new Error(`Hubo un error al obtener las provincias: ${(error as Error).message}`)
        }
    }

    async provinciaExiste(nombre: string): Promise<boolean> {
        try {
            const count = await Provincia.count({ where: { nombre } })
            return count > 0
        } catch (error) {
            throw new Error(`Hubo un error al obtener la provincia: ${(error as Error).message}`)
        }
    }



}
export default ProvinciaService