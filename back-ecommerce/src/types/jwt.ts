export interface BaseTokenPayload {
    id: number;
    email: string;
    iat?: number;
    exp?: number;
    type: "access" | "refresh";
}

export interface AccessTokenPayload extends BaseTokenPayload {
    type: "access";
    rol: "USER" | "ADMIN" | undefined;
}

export interface RefreshTokenPayload extends BaseTokenPayload {
    type: "refresh";
}

export function validateRol(rol: string | undefined): "USER" | "ADMIN" | undefined {
    if (rol === "USER" || rol === "ADMIN") {
        return rol;
    }
    return undefined;
}
