import { DocumentCnpjImpl } from './implementation/document/DocumentCnpjImpl';
import { DocumentCpfImpl } from './implementation/document/DocumentCpfImpl';
import { PersonCnpjImpl } from "./implementation/person/PersonCnpjImpl";
import { PersonCpfImpl } from './implementation/person/PersonCpfImpl';

/* POR FIM AQUI ESTÃO ALGUNS EXEMPLOS OBJETIVANDO A VALIDAÇÃO DO DESIGN PATTERN BRIDGE.
    NO MOMENTO QUE EU INSTANCIO A PESSOA E INJETO DENTRO DO CONSTRUTOR UM TIPO ESPECIFICO DE
    DOCUMENTO, EU REPASSO À CLASSE O TIPO DE DOCUMENTO QUE ELA DEVE VALIDAR, DE MODO QUE EU CONSIGO
    DESSAOCIAR A IMPLEMENTAÇÃO DA ABSTRAÇÃO, PERMITINDO ASSIM CRIAR DIVERSOS TIPOS DE VALIDAÇÃO EM 
    DIFERENTES TIPOS DE DOCUMENTO, BASTANDO A CRIAÇÃO DE MAIS UMA CLASSE EXTENDENDO DOCUMENT E CONSEQUENTEMENTE
    NÃO QUEBRA A APLICAÇÃO.
*/

/* CONDIÇÃO PARA VALIDAÇÃO DO METODO, UTILIZAÇÃO DE DOIS DOCUMENTOS VÁLIDOS (NO CONTEXTO DA APLICAÇÃO) */

const personCnpjValid = new PersonCnpjImpl(new DocumentCnpjImpl()).showDocument("12345678901234");

const personCpfValid = new PersonCpfImpl(new DocumentCpfImpl()).showDocument("12345678901");

console.log(personCnpjValid);
                
console.log(personCpfValid);

console.log("");

/* CONDIÇÃO PARA VALIDAÇÃO DO METODO, UTILIZAÇÃO DE DOIS DOCUMENTOS INVÁLIDOS (NO CONTEXTO DA APLICAÇÃO) */

const personCnpjInvalid = new PersonCnpjImpl(new DocumentCnpjImpl()).showDocument("1234");

const personCpfInvalid = new PersonCpfImpl(new DocumentCpfImpl()).showDocument("8901");

console.log(personCnpjInvalid);
                
console.log(personCpfInvalid);
