import jwt from "jsonwebtoken";

export const generarToken = (payload: {
    sub: number;
    email: string;
    type: "access" | "refresh";
}) => {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: "1h",
        issuer: "ecommerce-api",
    });
};
