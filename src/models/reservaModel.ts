import { v7 as uuidv7 } from "uuid";
import knex from "../config/database";

export interface Reserva {
  idReserva: string;
  usuarioId: string;
  experienciaId: string;
  dataReserva: string;
}

export const obterReserva = async (): Promise<Reserva[]> => {
  return await knex<Reserva>("Reserva").select("*");
};

export const obterReservaPorId = async (
  idReserva: string
): Promise<Reserva | undefined> => {
  return await knex<Reserva>("Reserva").where({ idReserva }).first();
};

export const criarReserva = async (
  data: Omit<Reserva, "idReserva">
): Promise<Reserva> => {
  const idReserva = uuidv7();

  await knex("Reserva").insert({ idReserva, ...data });
  return { idReserva, ...data };
};

export const deletarReserva = async (idReserva: string): Promise<void> => {
  await knex("Reserva").where({ idReserva }).del();
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
    .first();

  return {
    usuarioExiste: !!usuarioExiste,
    experienciaExiste: !!experienciaExiste,
  };
};

export const verificarLimiteDeReservas = async (
  experienciaId: string,
  dataReserva: string
): Promise<number> => {
  const result = await knex("Reserva")
    .where({ experienciaId })
    .andWhere("dataReserva", dataReserva)
    .count("idReserva as total")
    .first();

  const total = result?.total ? parseInt(result.total as string, 10) : 0;
  return total;
};
