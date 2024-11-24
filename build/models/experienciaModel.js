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
exports.deleteExperiencia = exports.updateExperiencia = exports.createExperiencia = exports.getExperienciaById = exports.searchExperienciaByLocal = exports.getExperienciasPaginated = void 0;
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../config/database"));
const getExperienciasPaginated = (page, limit, search) => __awaiter(void 0, void 0, void 0, function* () {
    const offset = (page - 1) * limit;
    const totalQuery = (0, database_1.default)("Experiencia").count({ count: "*" });
    const dataQuery = (0, database_1.default)("Experiencia")
        .select("*")
        .offset(offset)
        .limit(limit);
    if (search) {
        totalQuery.where("nome", "ilike", `%${search}%`);
        dataQuery.where("nome", "ilike", `%${search}%`);
    }
    const total = yield totalQuery.first();
    const data = yield dataQuery;
    return { total: Number(total === null || total === void 0 ? void 0 : total.count), data };
});
exports.getExperienciasPaginated = getExperienciasPaginated;
const searchExperienciaByLocal = (local) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, database_1.default)("Experiencia")
        .whereRaw("LOWER(unaccent(local)) = LOWER(unaccent(?))", [local])
        .select("*");
});
exports.searchExperienciaByLocal = searchExperienciaByLocal;
const getExperienciaById = (idExp) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, database_1.default)("Experiencia").where({ idExp }).first();
});
exports.getExperienciaById = getExperienciaById;
const createExperiencia = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const idExp = (0, uuid_1.v7)();
    yield (0, database_1.default)("Experiencia").insert(Object.assign({ idExp }, data));
    return Object.assign({ idExp }, data);
});
exports.createExperiencia = createExperiencia;
const updateExperiencia = (idExp, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.default)("Experiencia").where({ idExp }).update(data);
    return Object.assign({ idExp }, data);
});
exports.updateExperiencia = updateExperiencia;
const deleteExperiencia = (idExp) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.default)("Experiencia").where({ idExp }).del();
});
exports.deleteExperiencia = deleteExperiencia;
//# sourceMappingURL=experienciaModel.js.map