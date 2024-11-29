import { Request, Response } from "express";
import * as reservaService from "../services/reservaService";

export const obterReserva = async (req: Request, res: Response) => {
  try {
    const reservas = await reservaService.obterReserva();
    res.status(200).json(reservas);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao buscar reservas.";
    const statusCode =
      errorMessage === "Nenhuma reserva encontrada." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const obterReservaPorId = async (req: Request, res: Response) => {
  const { idReserva } = req.params;
  try {
    const reserva = await reservaService.obterReservaPorId(idReserva);
    res.status(200).json(reserva);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao buscar a reserva.";
    const statusCode = errorMessage === "Reserva não encontrada." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const criarReserva = async (req: Request, res: Response) => {
  const { usuarioId, experienciaId, dataReserva } = req.body;

  try {
    const novaReserva = await reservaService.criarReserva({
      usuarioId,
      experienciaId,
      dataReserva,
    });
    res.status(201).json(novaReserva);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao criar a reserva.";
    const statusCode =
      errorMessage ===
      "Todos os campos (usuarioId, experienciaId, dataReserva) devem ser preenchidos."
        ? 400
        : errorMessage ===
          "Usuário inexistente, não foi possível criar a reserva."
        ? 400
        : errorMessage ===
          "Experiência inexistente, não foi possível criar a reserva."
        ? 400
        : errorMessage ===
          "Já existem 2 reservas para esta experiência na data selecionada. Por favor, selecione outra data."
        ? 400
        : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const deletarReserva = async (req: Request, res: Response) => {
  const { idReserva } = req.params;
  try {
    await reservaService.deletarReserva(idReserva);
    res.status(200).json({ message: "Reserva deletada com sucesso." });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao deletar a reserva.";
    const statusCode = errorMessage === "Reserva não encontrada." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};
