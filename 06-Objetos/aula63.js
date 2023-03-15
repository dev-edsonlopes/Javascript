
/* Class PAI */
class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined

    }

    ligar = function () {
        this.ligado = true
    }

    desligar = function () {
        this.ligado = false
    }

    setCor = function (cor) {
        this.cor = cor
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function () {
        if (this.municao > 0) {
            this.municao--
        }
    }
}

const txt_nome = document.querySelector('#txt_nome')
const txt_portas = document.querySelector('#txt_portas')
const tipoMilitar = document.querySelector("#txt_tipoMilitar")
const tipoNormal = document.querySelector("#txt_tipoNormal")
const txt_blindagem = document.querySelector("#txt_blindagem")
const txt_municao = document.querySelector("#txt_municao")
const carros = document.querySelector('.carros')
const btn_addCarro = document.querySelector('#btn_addCarro')
let a_carro = []

tipoMilitar.addEventListener('click', () => {
    txt_blindagem.removeAttribute("disabled")
    txt_municao.removeAttribute("disabled")
})

tipoNormal.addEventListener('click', () => {
    txt_blindagem.value = 0
    txt_municao.value = 0
    txt_blindagem.setAttribute('disabled', 'disabled')
    txt_municao.setAttribute('disabled', 'disabled')

})

const exibirCarros = () => {
    carros.innerHTML = ""
    a_carro.map(c => {
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')
        div.innerHTML = `Nome: ${c.nome}<br/>`
        div.innerHTML += `Portas: ${c.portas}<br/>`
        div.innerHTML += `Blindagem: ${c.blindagem}<br/>`
        div.innerHTML += `Munição: ${c.municao}<br/>`
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener('click', () => {
    if (tipoNormal.checked) {
        const c = new Carro(txt_nome.value, txt_portas.value)
        a_carro.push(c)
    } else {
        const m = new Militar(txt_nome.value, txt_portas.value, txt_blindagem.value, txt_municao.value)
        a_carro.push(m)
    }
    exibirCarros()
    txt_nome.value = ""
    txt_portas.value = 0
    txt_blindagem.value = 0
    txt_municao.value = 0
})