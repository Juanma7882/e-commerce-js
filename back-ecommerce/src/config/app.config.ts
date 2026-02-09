import dotenv from "dotenv";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

dotenv.config();

dotenvConfig({ path: resolve(process.cwd(), ".env") });


const AppConfig = {
    port: Number(process.env.PORT),
    env: process.env.NODE_ENV
}
export default AppConfig;