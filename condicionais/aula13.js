let num = 40;

if (num > 10) {
    console.log("numero maior que 10");
    if (num > 50) {
        console.log("numero maior que 50");
    }
} else if (num > 5) {
    console.log("numero esta entre 6 e 10");
} else {
    console.log("numero menor ou igual que 5");
}

//-----------------------------------------------------------
console.log();

let energia = 100;
let clima = "chovendo";

if (energia > 70 && clima == "sol") {
    console.log("Vou a praia");
} else {
    console.log("Vou ao cinema");
}
//-----------------------------------------------------------
console.log("Fim do programa")