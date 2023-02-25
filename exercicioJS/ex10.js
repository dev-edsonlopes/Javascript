// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function divisivelPor3(valor) {
    valor = valor%3==0? true:false

    return valor
}

console.log(divisivelPor3(7))