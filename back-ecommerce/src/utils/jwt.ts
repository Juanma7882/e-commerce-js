import jwt from "jsonwebtoken";
import { AccessTokenPayload, RefreshTokenPayload } from "../types/jwt";

const JWT_SECRET = process.env.JWT_SECRET!;
const ACCESS_EXPIRES = "15m";
const REFRESH_EXPIRES = "7d";

if (!JWT_SECRET || !ACCESS_EXPIRES || !REFRESH_EXPIRES) {
    throw new Error("JWT environment variables are not set");
}


export const generarAccessToken = (
    payload: Omit<AccessTokenPayload, "type">
) =>
    jwt.sign(
        { ...payload, type: "access" },
        JWT_SECRET,
        { expiresIn: ACCESS_EXPIRES, algorithm: "HS256" },

    );

export const generarRefreshToken = (
    payload: Omit<RefreshTokenPayload, "type">
) =>
    jwt.sign(
        { ...payload, type: "refresh" },
        JWT_SECRET,
        { expiresIn: REFRESH_EXPIRES, algorithm: "HS256" }
    );

