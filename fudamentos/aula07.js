// Operadores Lógicos em Javascript

/*
    &&      and
    ||      or
    !       not

    *Obs: retorna valor booleano => true ou false
*/

/*
-----------------------------------
    Tabela verdade (AND --> &&)
    true and true   = true
    true and false  = false
    false and true  = false
    false and false = false

-----------------------------------
    Tabela verdade (OR --> ||)
    true or true    = true
    true or false   = true
    false or true   = true
    false or false  = false

-----------------------------------
Tabela verdade (NOT --> !)
not true    = false
not false   = true

-----------------------------------
*/

const v = true
const f = false

// teste logico

console.log('----')
console.log('NOT:')
console.log()
console.log(!v)
console.log(!f)
//AND
console.log('----')
console.log('AND:')
console.log()
console.log(v && v)
console.log(v && f)
console.log(f && f)

console.log('----')
//OR
console.log('OR:')
console.log()
console.log(v || v)
console.log(v || f)
console.log(f || f)
console.log('----')

// Teste Lógico + teste relacionais

let n1 = 10
let n2 = 5
let n3 = 20
let n4 = 10

console.log((n1 > n2) && (n3 > n4)) // true
console.log((n1 > n3) && (n3 > n2)) // false
console.log((n2 > n4) && (n3 > n1)) // false
console.log((n4 > n3) && (n2 > n1)) // false
console.log('----')


console.log((n1 > n2) || (n3 > n4)) // true
console.log((n1 > n3) || (n3 > n2)) // true
console.log((n2 > n4) || (n3 > n1)) // true
console.log((n4 > n3) || (n2 > n1)) // true