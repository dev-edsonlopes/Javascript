const cursos = ["HTML", "CSS", "JavaScript"]
const caixaCursos = document.querySelector("#caixaCursos")
const btnCursoSelecionado = document.querySelector('#btnCursoSelecionado')
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.querySelector('#btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.querySelector('#btnAdicionarNovoCursoDepois')
const nomeCurso = document.querySelector("#nomeCurso")

let indice = 0
const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    //evento
    novoElemento.addEventListener('click', evt => {
        removerSelecao()
        evt.target.classList.toggle("selecionado")
    })

    return novoElemento
}
const removerSelecao = () => {
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    cursoSelecionado.map(e => {
        e.classList.remove('selecionado')
    })
}
cursos.map(e => {
    const novoElemento = criarNovoCurso(e)
    caixaCursos.appendChild(novoElemento)
    indice++

})

const cursoSelecionado = () => {
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursoSelecionados[0]
}

btnCursoSelecionado.addEventListener('click', () => {
    try {
        window.alert('Curso selecionado: ' + cursoSelecionado().innerHTML)
    } catch (error) {
        window.alert('Curso não selecionado!')
    }
})

btnRemoverCurso.addEventListener('click', () => {
    try {
        cursoSelecionado().remove()
    } catch (error) {
        window.alert('Curso não selecionado!')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', () => {
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
        } else {
            window.alert('digite o nome do curso')
        }
    } catch (error) {
        window.alert('Curso não selecionado!')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', () => {
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        } else {
            window.alert('digite o nome do curso')
        }
    } catch (error) {
        window.alert('Curso não selecionado!')
    }
})