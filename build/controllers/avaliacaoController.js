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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAvaliacao = exports.createAvaliacao = exports.getAvaliacaoById = exports.getAvaliacoes = void 0;
const avaliacaoService = __importStar(require("../services/avaliacaoService"));
const getAvaliacoes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const avaliacoes = yield avaliacaoService.getAvaliacoes();
        res.status(200).json(avaliacoes);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro ao buscar as avaliações. Por favor, tente novamente mais tarde.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.getAvaliacoes = getAvaliacoes;
const getAvaliacaoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idAvali } = req.params;
    try {
        const avaliacao = yield avaliacaoService.getAvaliacaoById(idAvali);
        res.status(200).json(avaliacao);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro ao buscar a avaliação. Por favor, tente novamente mais tarde.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.getAvaliacaoById = getAvaliacaoById;
const createAvaliacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuarioId, experienciaId, comentario, nota } = req.body;
    try {
        const novaAvaliacao = yield avaliacaoService.createAvaliacao({
            usuarioId,
            experienciaId,
            comentario,
            nota,
        });
        res.status(201).json(novaAvaliacao);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro ao criar a avaliação. Verifique os dados e tente novamente.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.createAvaliacao = createAvaliacao;
const deleteAvaliacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idAvali } = req.params;
    try {
        yield avaliacaoService.deleteAvaliacao(idAvali);
        res.status(200).json({ message: "Avaliação deletada com sucesso." });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro ao deletar a avaliação. Tente novamente mais tarde.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.deleteAvaliacao = deleteAvaliacao;
//# sourceMappingURL=avaliacaoController.js.map