import * as avaliacaoModel from "../models/avaliacaoModel";

export const obterAvaliacoes = async () => {
  const avaliacoes = await avaliacaoModel.obterAvaliacoes();
  if (avaliacoes.length === 0) {
    throw new Error("Nenhuma avaliação encontrada.");
  }
  return avaliacoes;
};

export const obterAvaliacoesPorId = async (idAvaliacao: string) => {
  if (!idAvaliacao) {
    throw new Error("ID da avaliação é obrigatório.");
  }

  const avaliacao = await avaliacaoModel.obterAvaliacoesPorId(idAvaliacao);

  if (!avaliacao) {
    throw new Error("Avaliação não encontrada.");
  }

  return avaliacao;
};

export const criarAvaliacao = async (data: {
  usuarioId: string;
  experienciaId: string;
  comentario: string;
  nota: number;
}) => {
  const { usuarioId, experienciaId, nota } = data;

  if (!usuarioId || typeof usuarioId !== "string") {
    throw new Error("O campo 'usuarioId' é obrigatório e deve ser uma string.");
  }
  if (!experienciaId || typeof experienciaId !== "string") {
    throw new Error(
      "O campo 'experienciaId' é obrigatório e deve ser uma string."
    );
  }
  if (nota === undefined || typeof nota !== "number") {
    throw new Error("O campo 'nota' é obrigatório e deve ser um número.");
  }

  if (nota < 0 || nota > 5) {
    throw new Error("A nota deve estar entre 0 e 5.");
  }

  const { usuarioExiste, experienciaExiste } =
    await avaliacaoModel.validarUsuarioEExperiencia(usuarioId, experienciaId);

  if (!usuarioExiste) {
    throw new Error(
      "Usuário inexistente. Não foi possível acrescentar a avaliação."
    );
  }

  if (!experienciaExiste) {
    throw new Error(
      "Experiência inexistente. Não foi possível acrescentar a avaliação."
    );
  }

  return await avaliacaoModel.criarAvaliacao(data);
};

export const deletarAvaliacao = async (idAvaliacao: string) => {
  if (!idAvaliacao) {
    throw new Error("ID da avaliação é obrigatório para realizar a exclusão.");
  }

  const avaliacao = await obterAvaliacoesPorId(idAvaliacao);

  if (!avaliacao) {
    throw new Error("Avaliação não encontrada.");
  }

  return await avaliacaoModel.deletarAvaliacao(idAvaliacao);
};
