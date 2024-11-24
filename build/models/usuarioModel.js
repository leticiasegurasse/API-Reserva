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
exports.deleteUsuario = exports.createUsuario = exports.getUsuarioById = exports.getUsuarios = void 0;
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../config/database"));
const getUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, database_1.default)("Usuario").select("*");
});
exports.getUsuarios = getUsuarios;
const getUsuarioById = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, database_1.default)("Usuario").where({ idUser }).first();
});
exports.getUsuarioById = getUsuarioById;
const createUsuario = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const idUser = (0, uuid_1.v7)();
    yield (0, database_1.default)("Usuario").insert(Object.assign({ idUser }, data));
    return Object.assign({ idUser }, data);
});
exports.createUsuario = createUsuario;
const deleteUsuario = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.default)("Usuario").where({ idUser }).del();
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarioModel.js.map