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
exports.deleteExperiencia = exports.patchExperiencia = exports.updateExperiencia = exports.createExperiencia = exports.getExperienciaById = exports.searchExperienciaByLocal = exports.getExperienciasPaginated = void 0;
const experienciaModel = __importStar(require("../models/experienciaModel"));
const getExperienciasPaginated = (page, limit, search) => __awaiter(void 0, void 0, void 0, function* () {
    return yield experienciaModel.getExperienciasPaginated(page, limit, search);
});
exports.getExperienciasPaginated = getExperienciasPaginated;
const searchExperienciaByLocal = (local) => __awaiter(void 0, void 0, void 0, function* () {
    if (!local)
        throw new Error("O parâmetro 'local' é obrigatório e deve ser uma string.");
    const experiencias = yield experienciaModel.searchExperienciaByLocal(local);
    if (experiencias.length === 0) {
        throw new Error("Nenhuma experiência encontrada neste local.");
    }
    return experiencias;
});
exports.searchExperienciaByLocal = searchExperienciaByLocal;
const getExperienciaById = (idExp) => __awaiter(void 0, void 0, void 0, function* () {
    const experiencia = yield experienciaModel.getExperienciaById(idExp);
    if (!experiencia)
        throw new Error("Experiência não encontrada.");
    return experiencia;
});
exports.getExperienciaById = getExperienciaById;
const createExperiencia = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!data.nome || !data.local || typeof data.preco !== "number") {
        throw new Error("Campos obrigatórios (nome, local, preco) devem ser preenchidos corretamente.");
    }
    return yield experienciaModel.createExperiencia(data);
});
exports.createExperiencia = createExperiencia;
const updateExperiencia = (idExp, data) => __awaiter(void 0, void 0, void 0, function* () {
    const experiencia = yield (0, exports.getExperienciaById)(idExp);
    if (!experiencia)
        throw new Error("Experiência não encontrada.");
    return yield experienciaModel.updateExperiencia(idExp, data);
});
exports.updateExperiencia = updateExperiencia;
const patchExperiencia = (idExp, data) => __awaiter(void 0, void 0, void 0, function* () {
    const experiencia = yield (0, exports.getExperienciaById)(idExp);
    if (!experiencia)
        throw new Error("Experiência não encontrada.");
    return yield experienciaModel.updateExperiencia(idExp, data);
});
exports.patchExperiencia = patchExperiencia;
const deleteExperiencia = (idExp) => __awaiter(void 0, void 0, void 0, function* () {
    const experiencia = yield (0, exports.getExperienciaById)(idExp);
    if (!experiencia)
        throw new Error("Experiência não encontrada.");
    return yield experienciaModel.deleteExperiencia(idExp);
});
exports.deleteExperiencia = deleteExperiencia;
//# sourceMappingURL=experienciaService.js.map