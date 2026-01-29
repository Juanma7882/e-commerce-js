export interface DbConfig {
    host: string;
    port: number;
    userName: string;
    password: string;
    databaseName: string;
}

const required = (value: string | undefined, name: string): string => {
    if (!value) {
        throw new Error(`Missing required env var: ${name}`);
    }
    return value;
}

export const DbConfig: DbConfig = {
    host: process.env.PGHOST ?? "localhost",
    port: Number(process.env.PGPORT ?? 5432),
    userName: required(process.env.PGUSER, "PGUSER"),
    password: required(process.env.PGPASSWORD, "PGPASSWORD"),
    databaseName: required(process.env.PGDATABASE, "PGDATABASE"),
}