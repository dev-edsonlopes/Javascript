// Condicional IF e IF ELSE em Javascript

let num = 40

if(num > 10) {
    console.log('O número é maior que 10')
    if(num > 50) {
        console.log('O número é maior que 50')
    }
} else if (num > 5 ) {
    console.log('O número está entre 6 e 10')
} else {
    console.log('O número é menor ou igual á 5')
}

console.log('Fim do programa!')
console.log('-------------------')
// Teste Lógico(AND, OR) na condicional

let temp = 45
let clima = 'sol'

if (temp > 30 && clima == 'sol') {
    console.log('O tempo está bom para ir a praia')
} else {
    console.log('O tempo não está bom para ir a praia')
}
