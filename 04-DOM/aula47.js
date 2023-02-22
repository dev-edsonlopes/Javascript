const arr = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')
const elementos_array = [10, 5, 8, 2, 9, 15, 20]
arr.innerHTML = "["+elementos_array+"]"

btnPesquisar.addEventListener('click', () => {
    elementos_array.find((e, i)=> {
        resultado.innerHTML = "Valor não encontrado"
        if(e == txt_pesquisar.value) {
            resultado.innerHTML='Valor encontrado ' + e + ' na posição '+i
            return e
        }
    })
})