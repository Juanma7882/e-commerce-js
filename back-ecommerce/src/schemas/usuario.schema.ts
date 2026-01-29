import { z } from "zod";

export const crearUsuarioSchema = z.object({
    nombre: z.string().min(2),
    apellido: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    telefono: z.string().min(6),
    provincia: z.string().min(4),
    localidad: z.string().min(2),
    codigo_postal: z.string().min(2),
    direccion: z.string().min(5),
});

export const loginUsuarioSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});
