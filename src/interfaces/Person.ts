import { Document } from './Document';

export abstract class Person {

    /* A MESMA IDEIA PARA A CLASSE PERSON, NO ENTANTO É UTILIZADO UMA CLASSE ABSTRATA AO INVÉS DE UMA INTERFACE POSSIBILITANDO A
        UTILIZAÇÃO DE UM CONSTRUTOR NA HORA DE INSTANCIAR A CLASSE FACILITANDO A CONSTRUÇÃO DO OBJETO
    */

    protected document: Document;

    constructor(document: Document) {
        this.document = document;
    }
}
