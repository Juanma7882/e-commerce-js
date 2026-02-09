export interface DbConfig {
    host: string;
    port: number;
    userName: string;
    password: string;
    databaseName: string;
}

export interface AppConfig {
    port: number;
    env: string | undefined;
    db: DbConfig;
}


const required = (value: string | undefined, name: string): string => {
    if (!value) {
        throw new Error(`Missing required env var: ${name}`);
    }
    return value;
}

const getNumber = (value: string | undefined, fallback: number): number => {
    const n = parseInt(value ?? "", 10);
    return Number.isNaN(n) ? fallback : n;
};




export const AppConfig: AppConfig = {
    port: getNumber(process.env.PORT, 3000),
    env: process.env.NODE_ENV,
    db: {
        host: required(process.env.PGHOST, "PGHOST"),
        port: getNumber(process.env.PGPORT, 5432),
        userName: required(process.env.PGUSER, "PGUSER"),
        password: required(process.env.PGPASSWORD, "PGPASSWORD"),
        databaseName: required(process.env.PGDATABASE, "PGDATABASE"),
    }
}