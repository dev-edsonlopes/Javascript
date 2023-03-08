// Objetos em Javascript

class Carro {
    constructor(nome, modelo) {
        this.nome = nome
        if (modelo == 1) {
            this.modelo = 'Popular'
            this.velMax = 160
        } else if (modelo == 2) {
            this.modelo = 'esportivo'
            this.velMax = 320
        } else if (modelo == 3) {
            this.modelo = 'SUV'
            this.velMax = 190
        } else {
            this.modelo = 'SPRINT'
            this.velMax = 90
        }
    }

    getNome() {
        return this.nome
    }

    getModelo() {
        return this.getModelo
    }

    getVelMax() {
        return this.velMax
    }

    getInfo() {
        return [this.nome, this.modelo, this.velMax]
    }

    setNome(nome) {
        this.nome = nome
    }

    setModelo(modelo) {
        this.modelo = modelo
    }

    setVelMax(velMax) {
        this.velMax = velMax
    }
    
    info() {
        console.log(`nome: ${this.nome}`)
        console.log(`modelo: ${this.modelo}`)
        console.log(`velocidade Max: ${this.velMax}`)
    }

}

const c1 = new Carro('CRETA', 3)

c1.setNome('Tracker')
c1.info()

