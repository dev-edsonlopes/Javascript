// Herança em POO com Javascript

/* Class PAI */
class Carro {
    constructor(nome, portas, velMax = 120) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.velMax = velMax
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

class Esportivo extends Carro {
    constructor(nome, portas, velMax) {
        super(nome, portas, velMax)
        this.aeroDinamica = false
        this.setCor('Cinza Métalico')
    }

    aberto = function () {
        this.aeroDinamica =  true
        this.velMax = this.velMax * 1.5
    }
    fechado = function () {
        this.aeroDinamica =  false
        this.velMax = this.velMax
    }
}

const c1 = new Carro('Polo', 4)
c1.ligar()
c1.setCor('Prata')
console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado ? 'Sim' : 'Não'}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Velocidade Máxima: ${c1.velMax}`)
console.log(`Cor: ${c1.cor}`)
console.log('-----------------------------------------------\n')

const c2 = new Esportivo('McLaren', 2, 270)
c2.aberto()
c2.fechado()
c2.fechado()
console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Aerodinâmica: ${this.aeroDinamica? 'Fechado': 'Fechado'}`)
console.log(`Ligado: ${c2.ligado ? 'Sim' : 'Não'}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Velocidade Máxima: ${c2.velMax}`)
console.log(`Cor: ${c2.cor}`)
console.log('-----------------------------------------------\n')
