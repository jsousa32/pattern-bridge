"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCnpjImpl = void 0;
class DocumentCnpjImpl {
    showDocument(document) {
        document = document.replace("[^0-9]", "");
        if (document.length != 14) {
            return "CNPJ Inválido";
        }
        return document;
    }
}
exports.DocumentCnpjImpl = DocumentCnpjImpl;
