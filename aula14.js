let colocacao = 4;

switch (colocacao) {
    case 1:
        console.log("Primeiro lugar"), console.log("Medalha de ouro");
        break;
    case 2:
        console.log("Segundo lugar"), console.log("Medalha de prata");
        break;
    case 3:
        console.log("Terceiro lugar"), console.log("Medalha de bronze");
        break;
    case 4: case 5: case 6:
        console.log("Premio de participacao"), console.log("Medalha de participacao");
        break;
    default:
        console.log("Não subiu no pódio")
        break;
}