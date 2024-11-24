import { Request, Response } from "express";
import * as avaliacaoService from "../services/avaliacaoService";

export const obterAvaliacoes = async (req: Request, res: Response) => {
  try {
    const avaliacoes = await avaliacaoService.obterAvaliacoes();
    res.status(200).json(avaliacoes);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro ao buscar as avaliações. Por favor, tente novamente mais tarde.";
    const statusCode =
      errorMessage === "Nenhuma avaliação encontrada." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const obterAvaliacoesPorId = async (req: Request, res: Response) => {
  const { idAvaliacao } = req.params;
  try {
    const avaliacao = await avaliacaoService.obterAvaliacoesPorId(idAvaliacao);
    res.status(200).json(avaliacao);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro ao buscar a avaliação. Por favor, tente novamente mais tarde.";
    const statusCode = errorMessage === "Avaliação não encontrada." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const criarAvaliacao = async (req: Request, res: Response) => {
  const { usuarioId, experienciaId, comentario, nota } = req.body;
  try {
    const novaAvaliacao = await avaliacaoService.criarAvaliacao({
      usuarioId,
      experienciaId,
      comentario,
      nota,
    });
    res.status(201).json(novaAvaliacao);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro ao criar a avaliação. Verifique os dados e tente novamente.";
    const statusCode =
      errorMessage ===
      "Campos obrigatórios: 'usuarioId', 'experienciaId' e 'nota'. Certifique-se de preencher todos."
        ? 400
        : errorMessage === "A nota deve estar entre 0 e 5."
        ? 400
        : errorMessage ===
          "Usuário inexistente. Não foi possível acrescentar a avaliação."
        ? 400
        : errorMessage ===
          "Experiência inexistente. Não foi possível acrescentar a avaliação."
        ? 400
        : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const deletarAvaliacao = async (req: Request, res: Response) => {
  const { idAvaliacao } = req.params;
  try {
    await avaliacaoService.deletarAvaliacao(idAvaliacao);
    res.status(200).json({ message: "Avaliação deletada com sucesso." });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro ao deletar a avaliação. Tente novamente mais tarde.";
    const statusCode = errorMessage === "Avaliação não encontrada." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};
