import { Document } from "../../interfaces/Document";
import { Person } from "../../interfaces/Person";

export class PersonCnpjImpl extends Person {

    /* AQUI FOI FEITO A EXTENSÃO DA CLASSE PESSOA DE MODO QUE A PARTIR DA CLASSE ATUAL EU CONSIGA ACESSAR AS INFORMAÇÕES DA CLASSE PESSOA E POR SER
        UMA CLASSE ABSTRATA, EU CONSIGO ACESSAR TODOS OS METODOS CONTIDOS
    */

    constructor(document: Document) {
        super(document)
    }

    showDocument(parameter: string): string {
        return this.document.showDocument(parameter);
    }

}