"use strict" //modo estrito ou restrito

/*
    let nome = "Arthur"; //variavel que pode ser alterada, mas tem que ser declarada antes igual a do c++
    var nome = "Arthur"; //variavel que não pode ser alterada

    Em JavaScript, a principal diferença entre `let` e `var` está no **escopo** e no **hoisting**:  

1. **Escopo**:  
   - `var` tem escopo de **função** (ou global, se declarado fora de uma função).  
   - `let` tem escopo de **bloco** (dentro de `{}`, como em loops, condicionais ou funções).  

2. **Hoisting**:  
   - `var` é **hoisted** (içado) e inicializado como `undefined` antes da execução do código.  
   - `let` também é hoisted, mas **não é inicializado**, causando um erro se acessado antes da declaração (Temporal Dead Zone).  

3. **Re-declaração**:  
   - `var` permite re-declarar a mesma variável no mesmo escopo.  
   - `let` não permite re-declaração no mesmo escopo.  

Resumo: `let` é mais moderno e evita vazamentos de escopo, sendo preferível na maioria dos casos. `var` tem comportamentos menos intuitivos e é menos seguro em estruturas de bloco.

constante (const) é uma variável que não pode ser alterada, ou seja, não pode ser reatribuída após a declaração. No entanto, se a constante for um objeto ou array, você ainda pode modificar suas propriedades ou elementos.
*/

let nome = "Arthur";
nome ="AAA";
nome = 10;

const curso = "Javascript"

console.log(curso); 
console.log(nome); 
