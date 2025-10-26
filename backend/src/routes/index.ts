import { Router } from "express";
import consultaRoutes from '../modules/consultas/consulta.routes';

export const router = Router();

router.get("/health", (_req, res) => res.json({ status: "ok" }));
router.use("/consultas", consultaRoutes);