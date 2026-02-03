export interface BaseTokenPayload {
    id: number;
    email: string;
    iat?: number;
    exp?: number;
    type: "access" | "refresh";
}

export interface AccessTokenPayload extends BaseTokenPayload {
    type: "access";
}

export interface RefreshTokenPayload extends BaseTokenPayload {
    type: "refresh";
}