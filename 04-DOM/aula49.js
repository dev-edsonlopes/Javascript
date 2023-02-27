//Aprendendo o método SOME em Javascript

const arr = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [10,12,16,17,14,18,11,9]
arr.innerHTML = "["+elementos_array+"]"

btnVerificar.addEventListener('click', ()=> {
    const ret = elementos_array.some((e,i) => {
      if(e<18) {
        resultado.innerHTML = ('Array não conforme na posição '+ i)
    } 
    return e >= 18
})
    if(ret) {
        resultado.innerHTML = "OK!"
    }

})