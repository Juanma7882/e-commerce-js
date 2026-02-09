import { Request, Response } from "express";
import AuthService from "./auth.service";
import { loginUsuarioSchema } from "../schemas/usuario.schema";
import { refreshToken } from "../dto/auth/refresh-token.dto";

const authService = new AuthService();

class AuthController {

    async login(req: Request, res: Response) {
        const data = loginUsuarioSchema.parse(req.body);
        const result = await authService.login(data);
        res.json(result);
    }

    async refresh(req: Request, res: Response) {
        const data = refreshToken.parse(req.body);
        const result = await authService.refresh(data);
        res.json(result);
    }
}

export default new AuthController();
