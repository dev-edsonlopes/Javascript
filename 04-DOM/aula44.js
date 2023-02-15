const caixa = document.querySelector("#caixaCursos")
const cursos = ["HTML", "CSS", "Javascript", "React", "ReactNative", "PHP", "MySQL"]

// Percorrendo os cursos
cursos.map((e, i) => {
    // Adicionando Cursos
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + i)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = e
    caixa.appendChild(novoElemento)

    // Adicionando comandos
    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")
    novoElemento.appendChild(comandos)

    const circulo = document.createElement("input")
    circulo.setAttribute("type", "radio")
    circulo.setAttribute("name", "circulo_curso")
    comandos.appendChild(circulo)



})

//filtro
const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado = todosRadios.filter(e => {
        return e.checked
    })
    return radioSelecionado[0]
}

//Eventos
const btnCursoSelecionado = document.querySelector('#btnCursoSelecionado')
btnCursoSelecionado.addEventListener('click', () => {
    try {
        const cursoSelecionado = radioSelecionado()
        .parentNode
        .previousSibling
        .textContent
        window.alert('Curso selecionado: ' + cursoSelecionado)
    } catch (error){
        window.alert('Curso não selecionado!')
    }
})

const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
btnRemoverCurso.addEventListener('click', ()=> {
    try {
        const cursoSelecionado = radioSelecionado().parentNode.parentNode
        cursoSelecionado.remove()
        
    } catch (error) {
        window.alert('Curso não selecionado!')
    }
})