// Objetos em Javascript --> fuction!

function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade,


        this.getNome = function () {
            return this.nome
        },

        this.getIdade = function () {
            return this.idade
        }
}

const nome = document.querySelector('#txt_nome')
const idade = document.querySelector('#txt_idade')
const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')
let pessoas = []

const addPessoa = () => {
    res.innerHTML = ""
    pessoas.map(p => {
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${p.getNome()} <br/>Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click', () => {
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})
