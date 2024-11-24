"use strict";
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
exports.deleteAvaliacao = exports.createAvaliacao = exports.getAvaliacaoById = exports.getAvaliacoes = void 0;
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../config/database"));
const getAvaliacoes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, database_1.default)("Avaliacao").select("*");
});
exports.getAvaliacoes = getAvaliacoes;
const getAvaliacaoById = (idAvali) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, database_1.default)("Avaliacao").where({ idAvali }).first();
});
exports.getAvaliacaoById = getAvaliacaoById;
const createAvaliacao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const idAvali = (0, uuid_1.v7)();
    yield (0, database_1.default)("Avaliacao").insert(Object.assign({ idAvali }, data));
    return Object.assign({ idAvali }, data);
});
exports.createAvaliacao = createAvaliacao;
const deleteAvaliacao = (idAvali) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.default)("Avaliacao").where({ idAvali }).del();
});
exports.deleteAvaliacao = deleteAvaliacao;
//# sourceMappingURL=avaliacaoModel.js.map