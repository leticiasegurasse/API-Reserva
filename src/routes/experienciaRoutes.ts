import { Router } from "express";
import * as experienciaController from "../controllers/experienciaController";

const router = Router();

router.get("/", experienciaController.obterExperienciasPaginadas);
router.get("/obterPorLocal", experienciaController.obterExperienciasPorLocal);
router.get("/:idExperiencia", experienciaController.obterExperienciasPorId);
router.post("/", experienciaController.criarExperiencia);
router.put("/:idExperiencia", experienciaController.atualizarExperiencia);
router.patch("/:idExperiencia", experienciaController.modificarExperiencia);
router.delete("/:idExperiencia", experienciaController.deletarExperiencia);

export default router;
