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
exports.deleteReserva = exports.createReserva = exports.getReservaById = exports.getReservas = void 0;
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../config/database"));
const getReservas = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, database_1.default)("Reserva").select("*");
});
exports.getReservas = getReservas;
const getReservaById = (idReserva) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, database_1.default)("Reserva").where({ idReserva }).first();
});
exports.getReservaById = getReservaById;
const createReserva = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const idReserva = (0, uuid_1.v7)();
    yield (0, database_1.default)("Reserva").insert(Object.assign({ idReserva }, data));
    return Object.assign({ idReserva }, data);
});
exports.createReserva = createReserva;
const deleteReserva = (idReserva) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.default)("Reserva").where({ idReserva }).del();
});
exports.deleteReserva = deleteReserva;
//# sourceMappingURL=reservaModel.js.map