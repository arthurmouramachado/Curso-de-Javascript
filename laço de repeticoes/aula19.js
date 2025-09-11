//Break; e Continue;
let n=0
let max=1000
let pares=0

while(n<max){
    console.log("Arthur - " + n)
    if(n>10){
        break;
    }
    n++
}
console.log("Fim")
console.log()

for(let i=n;i<max;i++){
    if(i%2!=0){
        continue
    } 
    pares++
}
console.log("Qtd de Pares: ", pares)
console.log("Fim do AAAAA")