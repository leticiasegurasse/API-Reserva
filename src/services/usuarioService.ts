import * as usuarioModel from "../models/usuarioModel";
import { Usuario } from "../models/usuarioModel";

export const obterUsuarios = async () => {
  const usuarios = await usuarioModel.obterUsuarios();

  if (usuarios.length === 0) {
    throw new Error("Nenhum usuário encontrado.");
  }

  return usuarios;
};

export const obterUsuariosPorId = async (idUsuario: string) => {
  const usuario = await usuarioModel.obterUsuariosPorId(idUsuario);

  if (!usuario) {
    throw new Error("Usuário não encontrado.");
  }

  return usuario;
};

export const criarUsuario = async (data: Omit<Usuario, "idUsuario">) => {
  if (!data.nome || !data.email || !data.dataNasc) {
    throw new Error(
      "Todos os campos (nome, email, dataNasc) devem ser preenchidos."
    );
  }

  const usuarioExistente = await usuarioModel.encontrarUsuarioPorNomeEmail(
    data.nome,
    data.email
  );
  if (usuarioExistente) {
    throw new Error("Usuário com esse nome e e-mail já existe.");
  }

  return await usuarioModel.criarUsuario(data);
};

export const deletarUsuario = async (idUsuario: string) => {
  const usuario = await usuarioModel.obterUsuariosPorId(idUsuario);

  if (!usuario) {
    throw new Error("Usuário não encontrado.");
  }

  await usuarioModel.deletarUsuario(idUsuario);
};
