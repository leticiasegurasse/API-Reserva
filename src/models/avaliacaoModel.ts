import { v7 as uuidv7 } from "uuid";
import knex from "../config/database";

export interface Avaliacao {
  idAvaliacao: string;
  usuarioId: string;
  experienciaId: string;
  comentario: string;
  nota: number;
}

export const obterAvaliacoes = async (): Promise<Avaliacao[]> => {
  return await knex<Avaliacao>("Avaliacao").select("*");
};

export const obterAvaliacoesPorId = async (
  idAvaliacao: string
): Promise<Avaliacao | undefined> => {
  return await knex<Avaliacao>("Avaliacao").where({ idAvaliacao }).first();
};

export const criarAvaliacao = async (
  data: Omit<Avaliacao, "idAvaliacao">
): Promise<Avaliacao> => {
  const idAvaliacao = uuidv7();
  await knex("Avaliacao").insert({ idAvaliacao, ...data });
  return { idAvaliacao, ...data };
};

export const deletarAvaliacao = async (idAvaliacao: string): Promise<void> => {
  await knex("Avaliacao").where({ idAvaliacao }).del();
};

export const validarUsuarioEExperiencia = async (
  usuarioId: string,
  experienciaId: string
): Promise<{ usuarioExiste: boolean; experienciaExiste: boolean }> => {
  const usuarioExiste = await knex("Usuario")
    .where({ idUsuario: usuarioId })
    .first();

  const experienciaExiste = await knex("Experiencia")
    .where({ idExperiencia: experienciaId })

  return {
    usuarioExiste: !!usuarioExiste,
    experienciaExiste: !!experienciaExiste,
  };
};
