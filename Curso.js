const novosAlunos = require("./NovoEstudante");
const Aluno = require("./Alunos");


let curso = {
    nomeCurso: "English",
    notaAprovacao: 6,
    faltasMax: 4,
    listaEstudantes: novosAlunos,

    adicionarAluno: function(nome,qtdFaltas,notas) {
        this.listaEstudantes.push( new Aluno(nome,qtdFaltas,notas));
    },

    aprovado(Aluno) {
        if (Aluno.calculaMedia() >= this.notaAprovacao && Aluno.qtdFaltas < this.faltasMax) {
            return true;
        } else if (Aluno.qtdFaltas == this.faltasMax && Aluno.calculaMedia() >= this.notaAprovacao*0.10) {
            return true;
        } return false;
    },

    listaAprovacao() {
        return this.listaEstudantes.map((Aluno) => {
            return this.aprovado(Aluno)
        })
    }
    
};



module.exports = curso;