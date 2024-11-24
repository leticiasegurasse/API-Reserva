import { Request, Response } from "express";
import * as usuarioService from "../services/usuarioService";

export const obterUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await usuarioService.obterUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao buscar usuários.";
    const statusCode =
      errorMessage === "Nenhum usuário encontrado." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const obterUsuariosPorId = async (req: Request, res: Response) => {
  const { idUsuario } = req.params;
  try {
    const usuario = await usuarioService.obterUsuariosPorId(idUsuario);
    res.status(200).json(usuario);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao buscar o usuário.";
    const statusCode = errorMessage === "Usuário não encontrado." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};

export const criarUsuario = async (req: Request, res: Response) => {
  const { nome, email, dataNasc } = req.body;
  try {
    const novoUsuario = await usuarioService.criarUsuario({
      nome,
      email,
      dataNasc,
    });
    res.status(201).json(novoUsuario);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao criar o usuário.";
    let statusCode;

    if (
      errorMessage ===
      "Todos os campos (nome, email, dataNasc) devem ser preenchidos."
    ) {
      statusCode = 400;
    } else if (errorMessage === "Usuário com esse nome e e-mail já existe.") {
      statusCode = 409;
    } else {
      statusCode = 500;
    }

    res.status(statusCode).json({ message: errorMessage });
  }
};

export const deletarUsuario = async (req: Request, res: Response) => {
  const { idUsuario } = req.params;
  try {
    await usuarioService.deletarUsuario(idUsuario);
    res.status(200).json({ message: "Usuário deletado com sucesso." });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao deletar o usuário.";
    const statusCode = errorMessage === "Usuário não encontrado." ? 404 : 500;
    res.status(statusCode).json({ message: errorMessage });
  }
};
