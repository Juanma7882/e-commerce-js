import jwt from "jsonwebtoken"
import UnauthorizedError from "../custom-errors/http-errors/UnauthorizedError"


const JWT_SECRET = process.env.JWT_SECRET

function existJwtSecret(): string {
    if (!JWT_SECRET) {
        throw new Error("jwt secret key no esta definida")
    }
    return JWT_SECRET
}

export function verifyToken<T>(token: string): T {
    try {
        const decoded = jwt.verify(token, existJwtSecret(), {
            algorithms: ["HS256"],
        });

        return decoded as T;
    } catch {
        throw new UnauthorizedError("Token inválido o expirado");
    }
}