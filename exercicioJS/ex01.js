// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function operator(num1, num2) {
    return console.log(
        `
        ${num1} + ${num2} = ${num1+num2}
        ${num1} - ${num2} = ${num1-num2}
        ${num1} * ${num2} = ${num1*num2}
        ${num1} / ${num2} = ${num1/num2}
        
        `
    )
}

operator(10,5)