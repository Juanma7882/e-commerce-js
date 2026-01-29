import { Sequelize } from "sequelize";
import { DbConfig } from "../config/db.config";

export const sequelize = new Sequelize(
    DbConfig.databaseName,
    DbConfig.userName,
    DbConfig.password,
    {
        host: DbConfig.host,
        port: DbConfig.port,
        dialect: "postgres",
        logging: false,// activar logs de consultas osea mostrar en consola las consultas SQL que se ejecutan
    });

export async function conectarDB() {
    let intentos = 0;
    while (true) {
        try {
            await sequelize.authenticate();
            console.log("✅ DB conectada");
            break;
        } catch (error) {
            intentos++;
            if (process.env.NODE_ENV === "development") {
                console.log(`⏳ Esperando DB... intento ${intentos}`);
                console.log(`el error fue ${error}`);
            }
            await new Promise(r => setTimeout(r, 3000));
        }
    }
}
