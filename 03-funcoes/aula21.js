// RETORNO em Javascript

function retorno() {
    return "Exemplo de Retorno"
}

console.log(retorno())
console.log('-------------')

function retornoCalc() {
    let n1 = 2
    let n2 = 6

    return n1 * n2
}

console.log(retornoCalc())
console.log('-------')

function retornoRegra() {
    let num = 16
    
    if (num % 2 == 0) {
        return "PAR"
    } else {
        return "IMPAR"
    }
}

console.log(retornoRegra()) // TEM QUE GARANTIR QUE SÓ TENHA UM UNICO RETORNO. 