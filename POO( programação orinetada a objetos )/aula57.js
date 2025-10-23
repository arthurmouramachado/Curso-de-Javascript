// Aula 57 - Construtor
class Pessoa {
    /*
    construtor padrão:
    constructor(){
        this.nome = 'Arthur';
    }
    */
   // construtor com parâmetro:
     constructor(name){
        this.name = name;
    }
}

let p1 = new Pessoa();

let p2 = new Pessoa('Maria');
let p3 = new Pessoa('João');
let p4 = new Pessoa('Ana');

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);
console.log(p4.nome);
