const curso = require("./Modulos/Curso");

curso.listaEstudantes.forEach((aluno)=>{
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Quantidade de Faltas: ${aluno.qtdFaltas}`);
    console.log(`As notas são: ${aluno.notas}`);
    console.log(`A média de suas notas é: ${aluno.calculaMedia()}`);
    console.log(`Situação no curso: ${curso.aprovado(aluno) ? "Aprovado" : "Reprovado"}`)
})