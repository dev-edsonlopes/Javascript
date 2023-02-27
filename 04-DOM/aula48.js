//Aprendendo o método EVERY em Javascript

const arr = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [22,19,30,21,18,16]
arr.innerHTML = "["+elementos_array+"]"

btnVerificar.addEventListener('click', ()=> {
    const ret = elementos_array.every((e,i) => {
      if(e<18) {
        resultado.innerHTML = ('Array não conforme na posição '+ i)
    } 

    return e >= 18

})
    if(ret) {

        resultado.innerHTML = "OK!"
    }

})