// Funções Aninhadas

const soma = (...valores) => {
    const somar = valor => {
        let total = 0
        for(v of valor) {
            total += v
        }
        return total
    }
    return somar(valores)
}

console.log(soma(10,5,15))