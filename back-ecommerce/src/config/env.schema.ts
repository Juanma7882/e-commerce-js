import { z } from "zod";

export const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]),

    PORT: z.string(),

    JWT_SECRET: z.string().min(20),

    PGHOST: z.string(),
    PGPORT: z.string(),
    PGUSER: z.string(),
    PGPASSWORD: z.string(),
    PGDATABASE: z.string(),
});
