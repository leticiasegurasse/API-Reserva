import { Request, Response } from "express";
import * as experienciaService from "../services/experienciaService";

export const obterExperienciasPaginadas = async (req: Request, res: Response) => {
  const { page = 1, limit = 10, search = "" } = req.query;

  try {
    const experiencias = await experienciaService.obterExperienciasPaginadas(
      parseInt(page as string, 10),
      parseInt(limit as string, 10),
      search as string
    );
    res.status(200).json(experiencias);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao buscar experiências.";
    const statusCode =
      errorMessage === "Nenhuma experiência encontrada." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const obterExperienciasPorLocal = async (req: Request, res: Response) => {
  const { local } = req.query;

  try {
    const experiencias = await experienciaService.obterExperienciasPorLocal(
      local as string
    );
    res.status(200).json(experiencias);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao buscar experiências por local.";
    const statusCode =
      errorMessage === "Nenhuma experiência encontrada neste local."
        ? 404
        : 400;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const obterExperienciasPorId = async (req: Request, res: Response) => {
  const { idExperiencia } = req.params;
  try {
    const experiencia = await experienciaService.obterExperienciasPorId(idExperiencia);
    res.status(200).json(experiencia);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao buscar a experiência.";
    const statusCode =
      errorMessage === "Experiência não encontrada." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const criarExperiencia = async (req: Request, res: Response) => {
  const { nome, local, preco, descricao } = req.body;
  try {
    const novaExperiencia = await experienciaService.criarExperiencia({
      nome,
      local,
      preco,
      descricao,
    });
    res.status(201).json(novaExperiencia);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao criar a experiência.";
    const statusCode =
      errorMessage ===
      "Campos obrigatórios (nome, local, preco) devem ser preenchidos corretamente."
        ? 400
        : errorMessage === "O preço deve ser um valor positivo."
        ? 400
        : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const atualizarExperiencia = async (req: Request, res: Response) => {
  const { idExperiencia } = req.params;
  const { nome, local, preco, descricao } = req.body;
  try {
    const experienciaAtualizada = await experienciaService.atualizarExperiencia(
      idExperiencia,
      { nome, local, preco, descricao }
    );
    res.status(200).json(experienciaAtualizada);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao atualizar a experiência.";
    const statusCode =
      errorMessage === "Experiência não encontrada."
        ? 404
        : errorMessage ===
          "Todos os campos obrigatórios (nome, local, preco, descricao) devem ser preenchidos."
        ? 400
        : errorMessage === "O preço deve ser um valor positivo."
        ? 400
        : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const modificarExperiencia = async (req: Request, res: Response) => {
  const { idExperiencia } = req.params;
  const updateFields = req.body;

  try {
    const experienciaAtualizada = await experienciaService.modificarExperiencia(
      idExperiencia,
      updateFields
    );
    res.status(200).json(experienciaAtualizada);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao atualizar a experiência.";
    const statusCode =
      errorMessage === "Experiência não encontrada." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const deletarExperiencia = async (req: Request, res: Response) => {
  const { idExperiencia } = req.params;
  try {
    await experienciaService.deletarExperiencia(idExperiencia);
    res.status(200).json({ message: "Experiência deletada com sucesso." });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao deletar a experiência.";
    const statusCode =
      errorMessage === "Experiência não encontrada." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};
