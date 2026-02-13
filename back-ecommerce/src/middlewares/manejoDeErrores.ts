import { Request, Response } from "express";
import HttpError from "../custom-errors/http-errors/HttpError"

const manejoDeErrores = (error: HttpError, req: Request, res: Response) => {
    const isDev = process.env.NODE_ENV === "development"
    const statusCodeOfTheNumber = error.statusCode || 500

    res.status(statusCodeOfTheNumber).json({
        status: statusCodeOfTheNumber,
        message: error.message || "error interno",
        stack: isDev ? error.stack : null
    });

}

export default manejoDeErrores