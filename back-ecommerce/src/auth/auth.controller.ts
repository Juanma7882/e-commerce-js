import { NextFunction, Request, Response } from "express";
import AuthService from "./auth.service";
import { loginUsuarioSchema } from "../schemas/usuario.schema";
import { refreshToken } from "../dto/auth/refresh-token.dto";

const authService = new AuthService();

class AuthController {

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const data = loginUsuarioSchema.parse(req.body);
            const result = await authService.login(data);
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const data = refreshToken.parse(req.body);
            const result = await authService.refresh(data);
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
}

export default new AuthController();
