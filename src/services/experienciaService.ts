import * as experienciaModel from "../models/experienciaModel";
import { Experiencia } from "../models/experienciaModel";

export const obterExperienciasPaginadas = async (
  page: number,
  limit: number,
  search: string
) => {
  const experiencias = await experienciaModel.obterExperienciasPaginadas(
    page,
    limit,
    search
  );

  if (experiencias.data.length === 0) {
    throw new Error("Nenhuma experiência encontrada.");
  }

  return experiencias;
};

export const obterExperienciasPorLocal = async (local: string) => {
  if (!local) {
    throw new Error("O parâmetro 'local' é obrigatório e deve ser uma string.");
  }

  const experiencias = await experienciaModel.obterExperienciasPorLocal(local);

  if (experiencias.length === 0) {
    throw new Error("Nenhuma experiência encontrada neste local.");
  }

  return experiencias;
};

export const obterExperienciasPorId = async (idExperiencia: string) => {
  const experiencia = await experienciaModel.obterExperienciasPorId(idExperiencia);

  if (!experiencia) {
    throw new Error("Experiência não encontrada.");
  }

  return experiencia;
};

export const criarExperiencia = async (data: Omit<Experiencia, "idExperiencia">) => {
  if (!data.nome || !data.local || typeof data.preco !== "number") {
    throw new Error(
      "Campos obrigatórios (nome, local, preco) devem ser preenchidos corretamente."
    );
  }

  if (data.preco < 0) {
    throw new Error("O preço deve ser um valor positivo.");
  }

  return await experienciaModel.criarExperiencia(data);
};

export const atualizarExperiencia = async (
  idExperiencia: string,
  data: Partial<Experiencia>
) => {
  const experiencia = await obterExperienciasPorId(idExperiencia);
  if (!experiencia) {
    throw new Error("Experiência não encontrada.");
  }

  if (
    !data.nome ||
    !data.local ||
    typeof data.preco !== "number" ||
    !data.descricao
  ) {
    throw new Error(
      "Todos os campos obrigatórios (nome, local, preco, descricao) devem ser preenchidos."
    );
  }

  if (data.preco < 0) {
    throw new Error("O preço deve ser um valor positivo.");
  }

  return await experienciaModel.atualizarExperiencia(idExperiencia, data);
};

export const modificarExperiencia = async (
  idExperiencia: string,
  data: Partial<Experiencia>
) => {
  const experiencia = await obterExperienciasPorId(idExperiencia);
  if (!experiencia) {
    throw new Error("Experiência não encontrada.");
  }

  return await experienciaModel.atualizarExperiencia(idExperiencia, data);
};

export const deletarExperiencia = async (idExperiencia: string) => {
  const experiencia = await obterExperienciasPorId(idExperiencia);
  if (!experiencia) {
    throw new Error("Experiência não encontrada.");
  }

  return await experienciaModel.deletarExperiencia(idExperiencia);
};
