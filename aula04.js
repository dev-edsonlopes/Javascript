//Operadores Matemáticos em Javascript

/*
    Adição                      +
    Subtração                   -        
    Multiplicação               *
    Divisão                     /
    
    exponeciação                **
    resto ou modulo             %

    Incremento                  ++
    Decremento                  --

    Atribuição                  =
    Attr com adição             +=
    Attr com Subtração          -=
    Attre com Multiplicacão     *=
    Attr com Divisão            /=
*/

// declando as variáveis.
let num1 = 10
let num2 = 5
let res = 0

console.log('-----------------------')
console.log(num1, typeof(num1))
console.log(num1, typeof (num1))
console.log(res,'', typeof(res))
console.log('-----------------------')
res = num1 + num2
console.log(num1+' + '+num2+ ' = ', res)

res = num1 - num2
console.log(num1+' - '+num2+ ' = ', res)

res = num1 * num2
console.log(num1+' * '+ num2+ ' = ', res)


res = num1 / num2
console.log(num1+' / '+num2+ ' = ', res)

console.log('-----------------------')


console.log('Incremento', ++num1) // pre-incremento
console.log('Decremento', --num1) // pre-decremento

console.log('-----------------------')

console.log('Attr com adição', num1 += num1)
console.log('Attr com subtração', num1 -= num1)
console.log('Attr com multiplicação', num2 *= num2)
console.log('Attr com divisão', num2 /= num2)

console.log('-----------------------')
// Ordem de precedencia dos operadores;

/*
    1- negação / incremento / decremento;
    1- multiplicação / divisão / resto ou módulo;
    2- adição / subtração;
*/ 
