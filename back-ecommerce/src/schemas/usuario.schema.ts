import { z } from "zod";

export const crearUsuarioSchema = z.object({
    rolId: z.number(),
    nombre: z.string().min(2),
    apellido: z.string().min(2),
    email: z.string().email(),
    dni: z.number(),
    telefono: z.string().min(6),
    password: z.string().min(8),
});


export const loginUsuarioSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});
