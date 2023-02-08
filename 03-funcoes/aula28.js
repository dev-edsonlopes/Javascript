// Método MAP

// const cursos = ['HTML', 'CSS', 'Javascript','NodeJS', 'ReactJS']
// cursos.map((e, i) => {
//     console.log("Cursos:",e,"- Posição do curso:", i)
// })

// Aplicando no DOM

// let e = document.getElementsByTagName("div")
// e = [...e]
// e.map((e,i) => {
//     console.log(e.innerHTML)
// })

// //Retoranar os valores
// const e = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(e,({innerHTML}) => innerHTML)
// console.log(val) 

// converter os tipos da dados

const converterInt =  e => parseInt(e)
let num = ['1','2','3','4','5'].map(converterInt)
console.log(num)