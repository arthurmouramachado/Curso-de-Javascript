//Arrays
const caixa=document.querySelector("#caixa");

let cores=["azul","verde","vermelho",["claro","escuro","médio"]]
let cursos = ["HTML", "CSS", "JavaScript",cores];

/*
cursos.push("C++"); //Adiciona um elemento no final do array
cursos.push("Python");
cursos.pop(); //Remove o último elemento do array
cursos.unshift("Java"); //Adiciona um elemento no início do array
cursos.shift(); //Remove o primeiro elemento do array
*/

console.log(cursos[0]); //Acessa o primeiro elemento do array
console.log(cursos[3][3]); //Acessa o segundo elemento do array dentro do array
console.log(cursos[3][3][2]); //Acessa o terceiro elemento do array dentro do array dentro do array

cursos.map((el)=>{
    let p=document.createElement("p");
    p.innerHTML=el;
    caixa.appendChild(p);
});

