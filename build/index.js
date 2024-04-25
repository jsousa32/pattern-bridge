"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocumentCnpjImpl_1 = require("./implementation/document/DocumentCnpjImpl");
const DocumentCpfImpl_1 = require("./implementation/document/DocumentCpfImpl");
const PersonCnpjImpl_1 = require("./implementation/person/PersonCnpjImpl");
const PersonCpfImpl_1 = require("./implementation/person/PersonCpfImpl");
/* CONDIÇÃO PARA VALIDAÇÃO DO METODO, UTILIZAÇÃO DE DOIS DOCUMENTOS VÁLIDOS (NO CONTEXTO DA APLICAÇÃO) */
const personCnpjValid = new PersonCnpjImpl_1.PersonCnpjImpl(new DocumentCnpjImpl_1.DocumentCnpjImpl()).showDocument("12345678901234");
const personCpfValid = new PersonCpfImpl_1.PersonCpfImpl(new DocumentCpfImpl_1.DocumentCpfImpl()).showDocument("12345678901");
console.log(personCnpjValid);
console.log(personCpfValid);
console.log("");
console.log("");
console.log("");
/* CONDIÇÃO PARA VALIDAÇÃO DO METODO, UTILIZAÇÃO DE DOIS DOCUMENTOS INVÁLIDOS (NO CONTEXTO DA APLICAÇÃO) */
const personCnpjInvalid = new PersonCnpjImpl_1.PersonCnpjImpl(new DocumentCnpjImpl_1.DocumentCnpjImpl()).showDocument("1234");
const personCpfInvalid = new PersonCpfImpl_1.PersonCpfImpl(new DocumentCpfImpl_1.DocumentCpfImpl()).showDocument("8901");
console.log(personCnpjInvalid);
console.log(personCpfInvalid);
