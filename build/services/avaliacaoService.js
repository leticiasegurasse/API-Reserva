"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAvaliacao = exports.createAvaliacao = exports.validarUsuarioEExperiencia = exports.getAvaliacaoById = exports.getAvaliacoes = void 0;
const avaliacaoModel = __importStar(require("../models/avaliacaoModel"));
const database_1 = __importDefault(require("../config/database"));
const getAvaliacoes = () => __awaiter(void 0, void 0, void 0, function* () {
    const avaliacoes = yield avaliacaoModel.getAvaliacoes();
    if (avaliacoes.length === 0)
        throw new Error("Nenhuma avaliação encontrada.");
    return avaliacoes;
});
exports.getAvaliacoes = getAvaliacoes;
const getAvaliacaoById = (idAvali) => __awaiter(void 0, void 0, void 0, function* () {
    if (!idAvali)
        throw new Error("ID da avaliação é obrigatório.");
    const avaliacao = yield avaliacaoModel.getAvaliacaoById(idAvali);
    if (!avaliacao)
        throw new Error("Avaliação não encontrada.");
    return avaliacao;
});
exports.getAvaliacaoById = getAvaliacaoById;
const validarUsuarioEExperiencia = (usuarioId, experienciaId) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioExiste = yield (0, database_1.default)("Usuario")
        .where({ idUser: usuarioId })
        .first();
    const experienciaExiste = yield (0, database_1.default)("Experiencia")
        .where({ idExp: experienciaId })
        .first();
    return {
        usuarioExiste: !!usuarioExiste,
        experienciaExiste: !!experienciaExiste,
    };
});
exports.validarUsuarioEExperiencia = validarUsuarioEExperiencia;
const createAvaliacao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuarioId, experienciaId, nota } = data;
    if (!usuarioId || !experienciaId || nota === undefined) {
        throw new Error("Campos obrigatórios: 'usuarioId', 'experienciaId' e 'nota'. Certifique-se de preencher todos.");
    }
    if (nota < 0 || nota > 5)
        throw new Error("A nota deve estar entre 0 e 5.");
    const { usuarioExiste, experienciaExiste } = yield (0, exports.validarUsuarioEExperiencia)(usuarioId, experienciaId);
    if (!usuarioExiste)
        throw new Error("Usuário inexistente. Não foi possível acrescentar a avaliação.");
    if (!experienciaExiste)
        throw new Error("Experiência inexistente. Não foi possível acrescentar a avaliação.");
    return yield avaliacaoModel.createAvaliacao(data);
});
exports.createAvaliacao = createAvaliacao;
const deleteAvaliacao = (idAvali) => __awaiter(void 0, void 0, void 0, function* () {
    if (!idAvali)
        throw new Error("ID da avaliação é obrigatório para realizar a exclusão.");
    const avaliacao = yield (0, exports.getAvaliacaoById)(idAvali);
    if (!avaliacao)
        throw new Error("Avaliação não encontrada.");
    return yield avaliacaoModel.deleteAvaliacao(idAvali);
});
exports.deleteAvaliacao = deleteAvaliacao;
//# sourceMappingURL=avaliacaoService.js.map