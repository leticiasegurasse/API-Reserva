import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController";

const router = Router();

router.get("/", usuarioController.obterUsuarios);
router.get("/:idUsuario", usuarioController.obterUsuariosPorId);
router.post("/", usuarioController.criarUsuario);
router.delete("/:idUsuario", usuarioController.deletarUsuario);

export default router;
