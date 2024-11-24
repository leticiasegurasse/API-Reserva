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
exports.deleteExperiencia = exports.patchExperiencia = exports.updateExperiencia = exports.createExperiencia = exports.getExperienciaById = exports.searchExperienciaByLocal = exports.getExperiencias = void 0;
const experienciaService = __importStar(require("../services/experienciaService"));
const getExperiencias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 10, search = "" } = req.query;
    try {
        const experiencias = yield experienciaService.getExperienciasPaginated(parseInt(page, 10), parseInt(limit, 10), search);
        res.status(200).json(experiencias);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao buscar experiências.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.getExperiencias = getExperiencias;
const searchExperienciaByLocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { local } = req.query;
    try {
        const experiencias = yield experienciaService.searchExperienciaByLocal(local);
        res.status(200).json(experiencias);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao buscar experiências por local.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.searchExperienciaByLocal = searchExperienciaByLocal;
const getExperienciaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idExp } = req.params;
    try {
        const experiencia = yield experienciaService.getExperienciaById(idExp);
        res.status(200).json(experiencia);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao buscar a experiência.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.getExperienciaById = getExperienciaById;
const createExperiencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, local, preco, descricao } = req.body;
    try {
        const novaExperiencia = yield experienciaService.createExperiencia({
            nome,
            local,
            preco,
            descricao,
        });
        res.status(201).json(novaExperiencia);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao criar a experiência.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.createExperiencia = createExperiencia;
const updateExperiencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idExp } = req.params;
    const { nome, local, preco, descricao } = req.body;
    try {
        const experienciaAtualizada = yield experienciaService.updateExperiencia(idExp, { nome, local, preco, descricao });
        res.status(200).json(experienciaAtualizada);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao atualizar a experiência.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.updateExperiencia = updateExperiencia;
const patchExperiencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idExp } = req.params;
    const updateFields = req.body;
    try {
        const experienciaAtualizada = yield experienciaService.patchExperiencia(idExp, updateFields);
        res.status(200).json(experienciaAtualizada);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao atualizar a experiência.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.patchExperiencia = patchExperiencia;
const deleteExperiencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idExp } = req.params;
    try {
        yield experienciaService.deleteExperiencia(idExp);
        res.status(200).json({ message: "Experiência deletada com sucesso." });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao deletar a experiência.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.deleteExperiencia = deleteExperiencia;
//# sourceMappingURL=experienciaController.js.map