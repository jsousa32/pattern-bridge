"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonCpfImpl = void 0;
const Person_1 = require("../../interfaces/Person");
class PersonCpfImpl extends Person_1.Person {
    constructor(document) {
        super(document);
    }
    showDocument(parameter) {
        return this.document.showDocument(parameter);
    }
}
exports.PersonCpfImpl = PersonCpfImpl;
