//Operador THIS
function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    console.log(nome)
    console.log(nota)
}


aluno("Bruno",100);