import Pais from "../models/pais"
import { PaisDTO } from "../dto/pais/pais.dto"

class PaisService {
    async obtenerTodosLosPaises(): Promise<{ paises: PaisDTO[], cantidadDePaises: number }> {
        try {
            const { rows: paises, count: cantidadDePaises } = await Pais.findAndCountAll({
                attributes: ['id', 'nombre'],
            })
            return {
                cantidadDePaises,
                paises,
            }
        } catch (error) {
            throw new Error(`Hubo un error al obtener los paises: ${(error as Error).message}`)
        }
    }

    async paisExiste(nombre: string): Promise<boolean> {
        try {
            const count = await Pais.count({ where: { nombre } })
            return count > 0
        } catch (error) {
            throw new Error(`Hubo un error al obtener el pais: ${(error as Error).message}`)
        }
    }


}

export default PaisService