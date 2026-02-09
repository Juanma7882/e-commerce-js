import { Sequelize } from "sequelize";
import { AppConfig } from "../config/db.config";


export const sequelize = new Sequelize(
    AppConfig.db.databaseName,
    AppConfig.db.userName,
    AppConfig.db.password,
    {
        host: AppConfig.db.host,
        port: AppConfig.db.port,
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
