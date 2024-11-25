import { v7 as uuidv7 } from "uuid";
import knex from "../config/database";

export interface Experiencia {
  idExperiencia: string;
  nome: string;
  local: string;
  preco: number;
  descricao: string;
}

export const obterExperienciasPaginadas = async (
  page: number,
  limit: number,
  search: string
) => {
  const offset = (page - 1) * limit;

  const totalQuery = knex<Experiencia>("Experiencia").count({ count: "*" });

  const dataQuery = knex<Experiencia>("Experiencia")
    .select("*")
    .offset(offset)
    .limit(limit);

  if (search) {
    totalQuery.where("nome", "ilike", `%${search}%`);
    dataQuery.where("nome", "ilike", `%${search}%`);
  }

  const totalResult = await totalQuery.first();
  const data = await dataQuery;

  const total = totalResult ? Number(totalResult.count) : 0;

  return { total, data };
};

export const obterExperienciasPorLocal = async (local: string) => {
  return await knex<Experiencia>("Experiencia")
    .whereRaw("LOWER(unaccent(local)) = LOWER(unaccent(?))", [local])
    .select("*");
};

export const obterExperienciasPorId = async (idExperiencia: string) => {
  return await knex<Experiencia>("Experiencia").where({ idExperiencia }).first();
};

export const criarExperiencia = async (data: Omit<Experiencia, "idExperiencia">) => {
  const idExperiencia = uuidv7();
  await knex("Experiencia").insert({ idExperiencia, ...data });
  return { idExperiencia, ...data };
};

export const atualizarExperiencia = async (
  idExperiencia: string,
  data: Partial<Experiencia>
) => {
  await knex("Experiencia").where({ idExperiencia }).update(data);
  return { idExperiencia, ...data };
};

export const deletarExperiencia = async (idExperiencia: string) => {
  await knex("Experiencia").where({ idExperiencia }).del();
};

/*Omit<Experiencia, "idExperiencia"> cria um tipo que é igual ao tipo Experiencia, mas sem a propriedade idExperiencia. 
Isso é feito porque o idExperiencia é gerado automaticamente dentro da função usando uuidv7(), então quem chama a função não precisa informar essa propriedade. 
O parâmetro data aceita apenas as outras propriedades de Experiencia, garantindo que a função seja mais simples e segura de usar.*/
