import "./config/env"
import app from "./app"
import { AppConfig } from "./config/app.config"

// hay que generar una key segura
// node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

app.listen(AppConfig.port, () => {
    console.log("estamos corriendo")
})