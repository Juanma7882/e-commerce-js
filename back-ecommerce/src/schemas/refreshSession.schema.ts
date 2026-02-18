import { z } from "zod";


export const crearRefreshSessionAttributes = z.object({
    usuarioId: z.number(),
    tokenHash: z.string(),
    fingerprint: z.string(),
    deviceInfo: z.string(),
    ipAddress: z.string(),
    userAgent: z.string(),
    expiresAt: z.date(),
})

