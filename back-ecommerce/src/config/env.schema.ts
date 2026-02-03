import { z } from "zod";

// # Entorno
// NODE_ENV=development

// # Server
// PORT=3000

// # JWT
// JWT_SECRET=super_secret_key_que_no_se_comparte
// JWT_ACCESS_EXPIRES_IN=1h
// JWT_REFRESH_EXPIRES_IN=7d

// # DB (PostgreSQL)
// PGHOST=localhost
// PGPORT=5432
// PGUSER=postgres
// PGPASSWORD=admin
// PGDATABASE=ecommerce

export const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]),

    PORT: z.string(),

    JWT_SECRET: z.string().min(20),
    JWT_ACCESS_EXPIRES_IN: z.string(),
    JWT_REFRESH_EXPIRES_IN: z.string(),

    PGHOST: z.string(),
    PGPORT: z.string(),
    PGUSER: z.string(),
    PGPASSWORD: z.string(),
    PGDATABASE: z.string(),
});
