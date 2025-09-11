//FUnção Geradora

/*
next(): Usado para avançar a execução da geradora.

return(): Finaliza a execução da função geradora e retorna um valor.

throw(): Lança um erro dentro da função geradora.

for...of: Usado para iterar sobre os valores gerados de forma mais concisa.
*/

function* cores() {
  yield "Vermelho";
  yield "Verde";
  yield "Azul";
}

const itco = cores();
console.log(itco.next().value);//value = retorna o valor pelo yield
console.log(itco.next().value);
console.log(itco.next().value);
console.log(itco.next().done);//done = retorna o valor booleano que indica se a execução foi concluída

function* perguntas() {
  const nome = yield "Qual seu nome?";
  const esporte = yield "Qual o seu esporte favorito?";
  return "Seu nome é " + nome + ", seu esporte favorito é " + esporte;
}

const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next("Arthur").value);
console.log(itp.next("Volei").value);

function* contador() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const itc = contador();
for (let i = 0; i < 10; i++) {
  console.log(itc.next().value);
}

