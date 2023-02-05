//LET, VAR e CONST em Javascript

"use strict"


console.log('*************************')
// tipo var exemplo:
var nomeVar = 'tipo var Escopo Global'
if(true) {
    
    var nomeVarLocal = 'tipo var Escopo Local'

}

console.log(nomeVar)
console.log(nomeVarLocal)
 /*
    Tipo var, ele é acessivel fora do escopo mesmo a saída é declarada fora do escopo 
 */
console.log('*************************')

// Tipo let exemplo:

let nomeLet = 'Tipo let Escopo Global'

if(true) {
    let nomeLetLocal = 'Tipo let Escopo Local'
    console.log(nomeLetLocal)
}

console.log(nomeLet)
// console.log(nomeLet1) //(Erro)

/*
    A variavel tipo let não é acessivel fora do escopo, só dentro por diante.
*/

// let x const

console.log('*************************')
let alterandoValor = "teste"
console.log(alterandoValor)

alterandoValor = "alterou o valor teste"
console.log(alterandoValor)

alterandoValor = 10 // Javascript realiza a troca do tipo de dados automaticamente.
console.log(alterandoValor)

console.log('*************************')
const constValor = 'Valor constante'
console.log(constValor)

/*
constValor = 'ALTERAR VALOR CONSTATE'
console.log(constValor) (Erro)
*/

