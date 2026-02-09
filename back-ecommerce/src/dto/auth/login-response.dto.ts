export interface LoginResponseDTO {
    user: {
        id: number;
        nombre: string;
        email: string;
        // role: "admin" | "user";
    };
    accessToken: string;
    refreshToken: string;
    // tokenType: "Bearer";
    // expiresIn: number;
}