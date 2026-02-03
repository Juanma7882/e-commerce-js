import { z } from "zod";
import { crearUsuarioSchema } from "../../schemas/usuario.schema";

export type CrearUsuarioDTO = z.infer<typeof crearUsuarioSchema>