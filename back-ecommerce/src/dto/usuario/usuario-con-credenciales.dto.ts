export interface UsuarioConCredencialesDTO {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    rol: string;
    password: string
    tokenValidAfter: Date
}