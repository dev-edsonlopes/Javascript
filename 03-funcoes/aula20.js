// FUNÇÕES em Javascript

function nomeFuncao() {
    console.log('Minha função')
}

// Chamada da função
nomeFuncao()

//Outro Exemplo fazendo operação

function soma10e2() {
    const n1 = 10
    const n2 = 2
    const r = n1 + n2
    console.log(r)
}

soma10e2()

//Exemplo com DOM

function mudarTexto() {
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML="Primeiro Texto"
    d2.innerHTML="segundo Texto"
    d3.innerHTML="terceiro Texto"
}

// mudarTexto()