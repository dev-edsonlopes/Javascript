// Funções Anônimas em Javascript
 
const f = function(...valores) { 
    let total = 0
    for(v of valores) {
        total += v
    }

    return total
}

console.log(f(5,10,8,9,10))

// Funções Ânonimas e Função construtora

const c = new Function("v1", "v2", "return v1 + v2")

console.log(c(5,5))