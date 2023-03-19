function fatorial(num) {
    let resultado = 1
    for(let cont = 1; cont <= num; cont++) {
        resultado *= cont
    }
    return resultado
}

console.log(fatorial(9))