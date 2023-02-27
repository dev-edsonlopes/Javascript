//Aprendendo o método SOME em Javascript

const arr = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const elementos_array = [1,2,3,4,5]
const ant = []
const atu = []

arr.innerHTML = "["+elementos_array+"]"

btnReduzir.addEventListener('click', ()=> {
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
        return anterior+atual
    })

})