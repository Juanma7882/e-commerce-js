import "./config/env"

import app from "./app"
import AppConfig from "./config/app.config"
import { conectarDB, sequelize } from "./dbConection/conexion"
import "./models"
//! hay que generar una key segura
// node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

async function startServer() {

    try {
        await conectarDB;
        await sequelize.authenticate();
        console.log("✅ Conectado a la base de datos");

        console.log("sincronizando tablas......")
        await sequelize.sync({ alter: false });
        console.log("📦 Tablas sincronizadas");

        app.listen(AppConfig.port, () => {
            console.log("estamos corriendo en el puerto", AppConfig.port);
        })
    } catch (error) {
        console.log("error al iniciar el servidor:", error)
    }
}

startServer()