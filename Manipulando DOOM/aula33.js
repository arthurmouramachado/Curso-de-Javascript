//querySelector e querySelectorAll
const cursosTodos=[...document.getElementsByClassName("curso")];
const cursosC1=[...document.getElementsByClassName("c1")];
const cursosC2=[...document.getElementsByClassName("c2")];
const divTodas=[...document.getElementsByTagName("div")];

const query_divTodas=document.querySelector("div")
const queryAll_divTodas=[...document.querySelectorAll("div")]
const query_cursosTodos=[...document.getElementsByTagName(".curso")];

console.log(query_divTodas);
console.log(queryAll_divTodas);
console.log(query_cursosTodos);

/*
console.log(cursosTodos);
console.log(cursosC1);
console.log(cursosC2);
console.log(divTodas);
 */