import { z } from "zod"
import { crearRefreshSessionAttributes } from "../../schemas/refreshSession.schema";

export type crearRefreshSessionAttributesDTO = z.infer<typeof crearRefreshSessionAttributes>
