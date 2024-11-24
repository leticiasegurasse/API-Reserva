import * as reservaModel from "../models/reservaModel";

export const obterReserva = async () => {
  const reservas = await reservaModel.obterReserva();

  if (reservas.length === 0) {
    throw new Error("Nenhuma reserva encontrada.");
  }

  return reservas;
};

export const obterReservaPorId = async (idReserva: string) => {
  const reserva = await reservaModel.obterReservaPorId(idReserva);

  if (!reserva) {
    throw new Error("Reserva não encontrada.");
  }

  return reserva;
};

export const criarReserva = async (data: {
  usuarioId: string;
  experienciaId: string;
  dataReserva: string;
}) => {
  if (!data.usuarioId || !data.experienciaId || !data.dataReserva) {
    throw new Error(
      "Todos os campos (usuarioId, experienciaId, dataReserva) devem ser preenchidos."
    );
  }

  const { usuarioExiste, experienciaExiste } =
    await reservaModel.validarUsuarioEExperiencia(
      data.usuarioId,
      data.experienciaId
    );

  if (!usuarioExiste) {
    throw new Error("Usuário inexistente, não foi possível criar a reserva.");
  }

  if (!experienciaExiste) {
    throw new Error(
      "Experiência inexistente, não foi possível criar a reserva."
    );
  }

  return await reservaModel.criarReserva(data);
};

export const deletarReserva = async (idReserva: string) => {
  const reserva = await obterReservaPorId(idReserva);

  if (!reserva) {
    throw new Error("Reserva não encontrada.");
  }

  return await reservaModel.deletarReserva(idReserva);
};
