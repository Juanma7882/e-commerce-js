import { Router } from "express";
import authController from "./auth.controller";

const router = Router()
console.log("dfadasdf")

router.post("/login", authController.login);
router.post("/refresh", authController.refresh);

export default router;