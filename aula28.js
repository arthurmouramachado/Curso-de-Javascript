//Metodo Map()
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React"];
let c = cursos.map((el, i) => {
  console.log("Curso: " + el + " - Posição do curso: " + i);
  return el;
});

console.log("Retorno da variavel: ", c);

console.log();

const converterInt = (e) => parseInt(e);
const dobrar=(e)=>e*2
let num1 = ["1", "2", "3", "4", "5"].map(converterInt);
console.log(num1);
let num2 = ["1", "2", "3", "4", "5"].map(dobrar);
console.log(num2);
