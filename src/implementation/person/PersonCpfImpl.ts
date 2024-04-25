import { Document } from "../../interfaces/Document";
import { Person } from "../../interfaces/Person";

export class PersonCpfImpl extends Person{

    /* O MESMO QUE ACONTECE NA CLASSE PersonCnpjImp ACONTECE NA PRESENTE CLASSE */

    constructor(document: Document) {
        super(document)
    }

    showDocument(parameter: string): string {
        return this.document.showDocument(parameter);
    }
}