export interface BaseTokenPayload {
    id: number;
    email: string;
    iat?: number;
    exp?: number;
    type: "access" | "refresh";
}

export interface AccessTokenPayload extends BaseTokenPayload {
    type: "access";
    rol: "USER" | "ADMIN";
}

export interface RefreshTokenPayload extends BaseTokenPayload {
    type: "refresh";
}