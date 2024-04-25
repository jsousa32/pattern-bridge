import { Document } from "../../interfaces/Document";

export class DocumentCpfImpl implements Document {

  /* O MESMO É FEITO NESSA CLASSE, NO ENTANTO A VALIDAÇÃO É FEITA EM CIMA DE PESSOA FÍSICA, NO CONTEXTO O DOCUMENTO É O CPF */
    
  showDocument(document: string): string {
    document = document.replace("[^0-9]", "");

    if (document.length != 11) {
      return "CPF Inválido";
    }

    return document;
  }
}
