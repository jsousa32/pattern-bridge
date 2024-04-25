"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCpfImpl = void 0;
class DocumentCpfImpl {
    showDocument(document) {
        document = document.replace("[^0-9]", "");
        if (document.length != 11) {
            return "CPF Inválido";
        }
        return document;
    }
}
exports.DocumentCpfImpl = DocumentCpfImpl;
