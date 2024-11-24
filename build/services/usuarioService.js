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
exports.deleteUsuario = exports.createUsuario = exports.getUsuarioById = exports.getUsuarios = void 0;
const usuarioModel = __importStar(require("../models/usuarioModel"));
const getUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuarioModel.getUsuarios();
    if (usuarios.length === 0) {
        throw new Error("Nenhum usuário encontrado.");
    }
    return usuarios;
});
exports.getUsuarios = getUsuarios;
const getUsuarioById = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuarioModel.getUsuarioById(idUser);
    if (!usuario) {
        throw new Error("Usuário não encontrado.");
    }
    return usuario;
});
exports.getUsuarioById = getUsuarioById;
const createUsuario = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!data.nome || !data.email || !data.dataNasc) {
        throw new Error("Todos os campos (nome, email, dataNasc) devem ser preenchidos.");
    }
    return yield usuarioModel.createUsuario(data);
});
exports.createUsuario = createUsuario;
const deleteUsuario = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuarioModel.getUsuarioById(idUser);
    if (!usuario) {
        throw new Error("Usuário não encontrado.");
    }
    yield usuarioModel.deleteUsuario(idUser);
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarioService.js.map