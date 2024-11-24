"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizarTexto = normalizarTexto;
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
//# sourceMappingURL=normalizeText.js.map