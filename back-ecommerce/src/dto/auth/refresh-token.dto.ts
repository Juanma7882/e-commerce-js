import { z } from "zod";
export const refreshToken = z.object({
    refreshToken: z.string().min(1)
})

export type RefreshTokenDTO = z.infer<typeof refreshToken>