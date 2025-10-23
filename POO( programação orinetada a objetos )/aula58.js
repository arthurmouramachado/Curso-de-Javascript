// Aula 57 - Construtor
class Carro {
    /*
    construtor padrão:
    constructor(){
        this.nome = 'Arthur';
    }
    */
   // construtor com parâmetro:
     constructor(nome, tipo){
        this.nome =nome;
        if(tipo==1){
            this.tipo="Esportivo";
            this.velmax=300;
        }else if(tipo==2){
            this.tipo="Utilitário";
            this.velmax=100;
        }else if(tipo==3){
            this.tipo="Passeio";
            this.velmax=160;
        }else{
            this.tipo="Militar";
            this.velmax=180;
        }
    }

    getNome(){
        return this.nome;
    }
    getTipo(){
        return this.tipo;
    }
    getVelmax(){
        return this.velmax;
    }

    setNome(nome){
        this.nome = nome;
    }
    setTipo(tipo){
        this.tipo=tipo;
    }
    setVelMax(velmax){
        this.velmax=velmax;
    }

    info(){
        console.log("Nome: ", this.nome);
        console.log("Tipo: ", this.tipo);
        console.log("Velocidade Máxima: ", this.velmax);
        console.log('-------------------');
    }
}

let c1 = new Carro();
let c2 = new Carro("Civic",1);
let c3 = new Carro("Toro",2);
let c4 = new Carro("Corolla",3);
let c5 = new Carro("Blindado",4);

console.log('consturtor com parâmetro:');
console.log(c1.nome);
console.log(c1.tipo);
console.log(c1.velmax);
console.log('-------------------');
console.log(c2.nome);
console.log(c2.tipo);
console.log(c2.velmax);
console.log('-------------------');
console.log(c3.nome);
console.log(c3.tipo);
console.log(c3.velmax);
console.log('-------------------');
console.log(c4.nome);
console.log(c4.tipo);
console.log(c4.velmax);
console.log('-------------------');
console.log(c5.nome);
console.log(c5.tipo);
console.log(c5.velmax);
console.log('-------------------');

console.log('método info():');
c1.info();
c2.info();
c3.info();
c4.info();
c5.info();

console.log('-------------------');

console.log('getters e setters:');
c1.getNome();
c1.getTipo();
c1.getVelmax();
c1.info();
console.log('-------------------');

c1.setNome("Mustang");
c1.setTipo("Esportivo");
c1.setVelMax(320);
c1.info();

