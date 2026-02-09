export interface ObtenerListaUsuariosDTO {
    pagina?: number;       // página actual
    limit?: number;      // usuarios por página
    email?: string;      // filtro opcional
    nombre?: string;     // filtro opcional
}