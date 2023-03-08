// Objetos em Javascript

// criando Objeto: sintaxe
class Pessoa {
    constructor(p_nome) {
        this.nome = p_nome
    }
}

const p1 = new Pessoa('Edson')
const p2 = new Pessoa('Junior')
const p3 = new Pessoa('Flávia')
const p4 = new Pessoa('Jennifer')

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)
console.log(p4.nome)