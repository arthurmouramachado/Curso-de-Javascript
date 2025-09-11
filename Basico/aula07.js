/*
 && -> and / e
|| -> or / ou
! -> not / não  
*/

let n1, n2, n3, n4;
n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log("1°:", n1 > n2 && n1 > n3); //and / e
console.log("2°:", n1 > n2 || n1 > n3); //or / ou
console.log("3°:", !(n1 > n2 || n1 > n3)); //not / não

if (n1 > n2 && n3 > n4) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

if (n1 > n2 || n3 > n4) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

if (!(n1 > n2) && n3 > n4) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

if (!(n1 > n2) || !(n3 > n4)) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}
