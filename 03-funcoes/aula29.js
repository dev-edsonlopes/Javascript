// Operador THIS

function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota
    
    this.dados_alunos = function() {
        setTimeout(() => {
            console.log(this.nome, this.nota)
        }, 2000)
    }
}

const a1 = new aluno("Edson", 9.8)
const a2 = new aluno("Jennifer", 7.5)
const a3 = new aluno("Flavia", 6.6)

a1.dados_alunos()
a2.dados_alunos()
a3.dados_alunos()
