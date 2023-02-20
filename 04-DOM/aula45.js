const caixa = document.querySelector("#caixaCursos")
const cursos = ["HTML", "CSS", "Javascript", "React", "ReactNative", "PHP", "MySQL"]
const nomeCurso = document.querySelector("#nomeCurso")
let indice = 0

//função para criar os cursos
const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    // Adicionando comandos
    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")
    novoElemento.appendChild(comandos)

    const circulo = document.createElement("input")
    circulo.setAttribute("type", "radio")
    circulo.setAttribute("name", "circulo_curso")
    comandos.appendChild(circulo)

    return novoElemento
}
// Percorrendo os cursos
cursos.map((e, i) => {
    // Adicionando Cursos
    const novoElemento = criarNovoCurso(e)
    caixa.appendChild(novoElemento)
    indice++
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
    } catch (error) {
        window.alert('Curso não selecionado!')
    }
})

const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
btnRemoverCurso.addEventListener('click', () => {
    try {
        const cursoSelecionado = radioSelecionado().parentNode.parentNode
        cursoSelecionado.remove()

    } catch (error) {
        window.alert('Curso não selecionado!')
    }
})

const btnAdicionarNovoCursoAntes = document.querySelector("#btnAdicionarNovoCursoAntes")
btnAdicionarNovoCursoAntes.addEventListener('click', () => {
    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = radioSelecionado().parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixa.insertBefore(novoCurso, cursoSelecionado)
        } else {
            alert('Digite o nome do curso')
        }
    } catch (error) {
        window.alert('Curso não selecionado!')
    }
})

const btnAdicionarNovoCursoDepois = document.querySelector("#btnAdicionarNovoCursoDepois")
btnAdicionarNovoCursoDepois.addEventListener('click', () => {
    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = radioSelecionado().parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixa.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        } else {
            alert('Digite o nome do curso')
        }

    } catch (error) {
        window.alert('Curso não selecionado!')
    }
})
