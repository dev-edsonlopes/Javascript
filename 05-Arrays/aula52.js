// ARRAY em Javascript
const caixa = document.querySelector('#caixa')
let cursos = ['HTML5', 'CSS3', 'Javascript']

// PUSH add um novo ARRAY

cursos.push('NodeJS')
cursos.push('Python') 

// POP deleta o ultimo ARRAY
cursos.pop()

//UNSHIFT add um novo ARRAY na primeira posição
cursos.unshift('Lógica de Programação')
cursos.unshift('Pacote office')

// SHIFT deleta o ARRAY da primeira posição
cursos.shift()

cursos.map((e) => {
    let curso = document.createElement('p')
    curso.innerHTML = e
    caixa.appendChild(curso)
})