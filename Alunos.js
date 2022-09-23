function Aluno(nome,qtdFaltas,notas){
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    
    this.calculaMedia = () => {
        let soma = this.notas.reduce((acumulador,nota)=>{
            return  acumulador+nota
        },0)
        return (soma/notas.length);
    };

    this.faltas = () => {
        this.qtdFaltas++
    };
}

module.exports = Aluno;