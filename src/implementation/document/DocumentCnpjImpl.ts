import { Document } from "../../interfaces/Document";

export class DocumentCnpjImpl implements Document {

    /* AQUI É FEITA A IMPLEMENTANÇÃO DA INTERFACE DOCUMENT NO INTUITO DE VALIDAR O DOCUMENTO DO TIPO DE PESSOA JURÍDICA, NO CASO O CNPJ */

    showDocument(document: string): string {
        document = document.replace("[^0-9]", "");

        if(document.length != 14) {
            return "CNPJ Inválido";
        }

        return document;
    }

}