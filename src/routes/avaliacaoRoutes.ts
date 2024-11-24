import { Router } from "express";
import * as avaliacaoController from "../controllers/avaliacaoController";

const router = Router();

router.get("/", avaliacaoController.obterAvaliacoes);
router.get("/:idAvaliacao", avaliacaoController.obterAvaliacoesPorId);
router.post("/", avaliacaoController.criarAvaliacao);
router.delete("/:idAvaliacao", avaliacaoController.deletarAvaliacao);

export default router;
