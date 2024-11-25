import { v7 as uuidv7 } from "uuid";
import knex from "../config/database";

export interface Usuario {
  idUsuario: string;
  nome: string;
  email: string;
  dataNasc: string;
}

export const obterUsuarios = async () => {
  return await knex<Usuario>("Usuario").select("*");
};

export const obterUsuariosPorId = async (idUsuario: string) => {
  return await knex<Usuario>("Usuario").where({ idUsuario }).first();
};

export const criarUsuario = async (data: Omit<Usuario, "idUsuario">) => {
  const idUsuario = uuidv7();
  await knex("Usuario").insert({ idUsuario, ...data });
  return { idUsuario, ...data };
};

export const encontrarUsuarioPorNomeEmail = async (
  nome: string,
  email: string
): Promise<Usuario | undefined> => {
  return await knex<Usuario>("Usuario").where({ nome, email }).first();
};

export const deletarUsuario = async (idUsuario: string) => {
  await knex("Usuario").where({ idUsuario }).del();
};

/*Omit<Usuario, "idUsuario"> cria um tipo baseado no tipo Usuario, mas sem a propriedade idUsuario. 
Isso acontece porque o idUsuario é gerado automaticamente dentro da função usando uuidv7(). 
Dessa forma, o parâmetro data deve conter apenas as outras propriedades de Usuario, enquanto a função cuida de adicionar o idUsuario, 
garantindo simplicidade e segurança na criação de usuários.*/
