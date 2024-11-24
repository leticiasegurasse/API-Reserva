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
exports.deleteReserva = exports.createReserva = exports.getReservaById = exports.getReservas = void 0;
const reservaService = __importStar(require("../services/reservaService"));
const getReservas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservas = yield reservaService.getReservas();
        res.status(200).json(reservas);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao buscar reservas.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.getReservas = getReservas;
const getReservaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idReserva } = req.params;
    try {
        const reserva = yield reservaService.getReservaById(idReserva);
        res.status(200).json(reserva);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao buscar a reserva.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.getReservaById = getReservaById;
const createReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuarioId, experienciaId, dataReserva } = req.body;
    try {
        const novaReserva = yield reservaService.createReserva({
            usuarioId,
            experienciaId,
            dataReserva,
        });
        res.status(201).json(novaReserva);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao criar a reserva.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.createReserva = createReserva;
const deleteReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idReserva } = req.params;
    try {
        yield reservaService.deleteReserva(idReserva);
        res.status(200).json({ message: "Reserva deletada com sucesso." });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao deletar a reserva.";
        res.status(500).json({ message: errorMessage });
    }
});
exports.deleteReserva = deleteReserva;
//# sourceMappingURL=reservaController.js.map