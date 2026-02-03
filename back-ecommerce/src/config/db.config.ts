
const getNumber = (value: string | undefined, fallback: number): number => {
    const n = parseInt(value ?? "", 10);
    return Number.isNaN(n) ? fallback : n;
};


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




export const AppConfig: AppConfig = {
    port: getNumber(process.env.PGPORT),
    env: process.env.NODE_ENV,
    db: {

        host: process.env.PGHOST,
        port: Number(process.env.PGPORT),
        userName: required(process.env.PGUSER),
        password: required(process.env.PGPASSWORD),
        databaseName: required(process.env.PGDATABASE),
    }
}