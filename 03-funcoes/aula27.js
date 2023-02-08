// Função Geradoras

function* cores() {
    yield 'vermelho'
    yield 'Verde'
    yield 'azul'
}

let itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)


function* perguntas() {
    const nome = yield 'Qual é seu nome?'
    const esporte = yield 'Qual é o seu esporte favorito?'
    return `Seu nome é ${nome} e você gosta ${esporte}`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Edson').value)
console.log(itp.next('Futebol').value)


function* contador() {
    let c = 0
    while(true) {
        yield c++
    }
}

const itContador = contador()
console.log(itContador.next().value)
console.log(itContador.next().value)
console.log(itContador.next().value)


