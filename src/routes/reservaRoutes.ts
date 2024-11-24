import { Router } from "express";
import * as reservaController from "../controllers/reservaController";

const router = Router();

router.get("/", reservaController.obterReserva);
router.get("/:idReserva", reservaController.obterReservaPorId);
router.post("/", reservaController.criarReserva);
router.delete("/:idReserva", reservaController.deletarReserva);

export default router;
