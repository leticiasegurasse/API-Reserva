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
const usuarioService = __importStar(require("../services/usuarioService"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuarioService.getUsuarios();
        res.status(200).json(usuarios);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao buscar usuários.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    try {
        const usuario = yield usuarioService.getUsuarioById(idUser);
        res.status(200).json(usuario);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao buscar o usuário.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.getUsuarioById = getUsuarioById;
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, dataNasc } = req.body;
    try {
        const novoUsuario = yield usuarioService.createUsuario({ nome, email, dataNasc });
        res.status(201).json(novoUsuario);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao criar o usuário.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.createUsuario = createUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    try {
        yield usuarioService.deleteUsuario(idUser);
        res.status(200).json({ message: "Usuário deletado com sucesso." });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao deletar o usuário.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarioController.js.map