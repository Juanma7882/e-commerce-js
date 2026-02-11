import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AccessTokenPayload } from "../types/jwt";
import Usuario from "../models/usuario";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({ message: "Invalid token format" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AccessTokenPayload;

        if (decoded.type !== "access") {
            return res.status(401).json({ message: "Token inválido" });
        }

        const usuario = await Usuario.findByPk(decoded.id);

        if (!usuario) {
            return res.status(401).json({ message: "Usuario no existe" });
        }

        if (
            decoded.iat &&
            decoded.iat * 1000 <
            new Date(usuario.tokenValidAfter).getTime()
        ) {
            return res.status(401).json({ message: "Token invalidado" });
        }

        req.user = decoded;

        next();
    } catch (error) {
        const message =
            process.env.NODE_ENV === "development"
                ? { message: "Invalid or expired token", error }
                : { message: "Invalid or expired token" };

        return res.status(401).json(message);
    }
};