import { Request, Response } from "express";
import { crearUsuarioSchema } from "../schemas/usuario.schema";
import UsuarioService from "../service/usuarioService";

const service = new UsuarioService();

export const crearUsuario = async (req: Request, res: Response) => {
    try {
        const data = crearUsuarioSchema.parse(req.body);

        const usuario = await service.crearUsuarioDTO(data);

        res.status(201).json(usuario);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: "Error interno" });
    }
};
