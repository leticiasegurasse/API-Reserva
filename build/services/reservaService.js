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
exports.deleteReserva = exports.createReserva = exports.validarUsuarioEExperiencia = exports.getReservaById = exports.getReservas = void 0;
const reservaModel = __importStar(require("../models/reservaModel"));
const database_1 = __importDefault(require("../config/database"));
const getReservas = () => __awaiter(void 0, void 0, void 0, function* () {
    const reservas = yield reservaModel.getReservas();
    if (reservas.length === 0) {
        throw new Error("Nenhuma reserva encontrada.");
    }
    return reservas;
});
exports.getReservas = getReservas;
const getReservaById = (idReserva) => __awaiter(void 0, void 0, void 0, function* () {
    const reserva = yield reservaModel.getReservaById(idReserva);
    if (!reserva) {
        throw new Error("Reserva não encontrada.");
    }
    return reserva;
});
exports.getReservaById = getReservaById;
const validarUsuarioEExperiencia = (usuarioId, experienciaId) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioExiste = yield (0, database_1.default)("Usuario").where({ idUser: usuarioId }).first();
    const experienciaExiste = yield (0, database_1.default)("Experiencia").where({ idExp: experienciaId }).first();
    return {
        usuarioExiste: !!usuarioExiste,
        experienciaExiste: !!experienciaExiste,
    };
});
exports.validarUsuarioEExperiencia = validarUsuarioEExperiencia;
const createReserva = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!data.usuarioId || !data.experienciaId || !data.dataReserva) {
        throw new Error("Todos os campos (usuarioId, experienciaId, dataReserva) devem ser preenchidos.");
    }
    const { usuarioExiste, experienciaExiste } = yield (0, exports.validarUsuarioEExperiencia)(data.usuarioId, data.experienciaId);
    if (!usuarioExiste) {
        throw new Error("Usuário inexistente, não foi possível criar a reserva.");
    }
    if (!experienciaExiste) {
        throw new Error("Experiência inexistente, não foi possível criar a reserva.");
    }
    return yield reservaModel.createReserva(data);
});
exports.createReserva = createReserva;
const deleteReserva = (idReserva) => __awaiter(void 0, void 0, void 0, function* () {
    const reserva = yield (0, exports.getReservaById)(idReserva);
    if (!reserva) {
        throw new Error("Reserva não encontrada.");
    }
    return yield reservaModel.deleteReserva(idReserva);
});
exports.deleteReserva = deleteReserva;
//# sourceMappingURL=reservaService.js.map