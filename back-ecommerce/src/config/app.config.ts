export const AppConfig = {
    port: Number(process.env.APP_PORT ?? 3000),
    env: process.env.NODE_ENV ?? "development"
}