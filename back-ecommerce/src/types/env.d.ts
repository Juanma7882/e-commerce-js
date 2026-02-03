
declare interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT: string;
    JWT_SECRET: string;

    JWT_ACCESS_EXPIRES_IN: string;
    JWT_REFRESH_EXPIRES_IN: string;
    PGHOST: string;
    PGPORT: string;
    PGUSER: string;
    PGPASSWORD: string;
    PGDATABASE: string;
}