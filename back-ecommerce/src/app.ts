import express from "express";
import authRoutes from "./auth/auth.routes";
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.get("/health", (req, res) => {
    res.json({ ok: true });
})

export default app