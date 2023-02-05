// declarações BREAK e CONTINUE em Javascript

let n = 0
let max = 1000
let pares = 0
// BREAK

console.log('BREAK:')
while(n < max) {
    console.log(n)
    if(n > 9) {
        break
    }
    n++
}

console.log('Fim do programa!')
console.log()
// CONTINUE

console.log('CONTINUE:')
for(let i = 0; i < max; i++) {
    if(i % 2 != 0) {
        continue
    }
    pares++
}

console.log('Quantidade de pares:',pares)
