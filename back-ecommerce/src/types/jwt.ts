import { JwtPayload } from "jsonwebtoken";

export interface AccessTokenPayload extends JwtPayload {
    id: number;
    email: string;
    type: "access";
}
