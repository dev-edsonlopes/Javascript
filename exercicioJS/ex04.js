// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

const divisao = (dividendo, divisor) => {

    return console.log(`
        ${dividendo} / ${divisor} = ${(dividendo/divisor).toFixed(0)} 
        resto da divisão é ${dividendo%divisor}
    `)
} 

divisao(4,3)