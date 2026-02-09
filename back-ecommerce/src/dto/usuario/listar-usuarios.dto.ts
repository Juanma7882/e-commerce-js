import { UsuarioResponseDTO } from "./usuario-response.dto"

export interface ListarUsuariosDTO {
    total: number;
    pagina: number;
    limit: number;
    usuarios: UsuarioResponseDTO[];
}