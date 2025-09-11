let num1 = 10;
res = (num1 % 2 ? "par" : "impar")
console.log("Num1:", res); //impar

//outra forma de fazer
let num2 = 10;
res = (!(num2 % 2) ? "par" : "impar")
console.log("Num2: ", res);

//0 => false
//1 => true

//Teste lógico - Operaçao ternaria - ? - se verdadeiro : se falso