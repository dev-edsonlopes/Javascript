//Aprendendo o método SOME em Javascript

const arr = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const elementos_array = [1,2,3,4,5]
const res = []
const el = []

arr.innerHTML = "["+elementos_array+"]"

btnReduzir.addEventListener('click', ()=> {
    resultado.innerHTML = elementos_array.reduce((result, elemento) => {
        res.push(result)
        el.push(elemento)
        return result + elemento 
    })
    resultado.innerHTML += "</br> Elemento: "+el
     resultado.innerHTML += "</br> Retorno da Operação: "+res

})