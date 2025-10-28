// Aula 59 - classe com DOOM
class Pessoa {
    /*
    construtor padrão:
    constructor(){
        this.nome = 'Arthur';
    }
    */
   // construtor com parâmetro:
     constructor(nome, idade){
        this.nome =nome;
        this.idade =idade;

    }

    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    

    setNome(nome){
        this.nome = nome;
    }
    setIdade(idade){
        this.idade=idade;
    }
   

    info(){
        console.log("Nome: ", this.nome);
        console.log("Idade: ", this.idade);
        console.log('-------------------');
        
    }
}

let pessoas = [];

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

btn_add.addEventListener("click", (evt) => {
      const nome = document.querySelector("#f_nome");
      const idade = document.querySelector("#f_idade");
      const p = new Pessoa(nome.value, idade.value);
      pessoas.push(p);
      nome.value="";
      idade.value="";
      nome.focus()
      console.log(pessoas);
      
});
