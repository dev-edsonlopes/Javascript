// // Populando ARRAYS com funções em Javascript
const btn_soma = document.querySelector('#btn_soma') 
const btn_sub = document.querySelector('#btn_sub')
const btn_mult = document.querySelector('#btn_mult')
const btn_div = document.querySelector('#btn_div')
const res = document.querySelector('#res')

const op = [
    () => {
        const val = [document.getElementById('valor1').value, document.getElementById('valor2').value]
        res.value = Number(val[0]) + Number(val[1])
    },
    () => {
        const val = [document.getElementById('valor1').value, document.getElementById('valor2').value]
        res.value = Number(val[0]) - Number(val[1])
    },
    () => {
        const val = [document.getElementById('valor1').value, document.getElementById('valor2').value]
        res.value = Number(val[0]) * Number(val[1])
    },
    () => {
        const val = [document.getElementById('valor1').value, document.getElementById('valor2').value]
        res.value = Number(val[0]) / Number(val[1])
    }
] 

btn_soma.addEventListener('click', op[0])
btn_sub.addEventListener('click', op[1])
btn_mult.addEventListener('click', op[2])
btn_div.addEventListener('click', op[3])














// let valores = [1,2]
// let op = [
//     (val) => {
//         let res = 0
//         for(v of val) {
//             res += v
//         }  
//         return res 
//     },
//     (val) => {
//         let res = 1
//         for(v of val) {
//             res *= v
//         } 
//         return res 
//     },
//     (val) => {
//         for(v of val){console.log(v)} 
//     }
// ]

// op[2](valores)