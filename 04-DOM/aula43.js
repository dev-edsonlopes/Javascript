const caixa = document.querySelector("#caixaCursos")
const cursos = ["HTML", "CSS", "Javascript", "React", "ReactNative", "PHP", "MySQL"]

// Percorrendo os cursos
cursos.map((e, i) => {
    // Adicionando Cursos
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" +i)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = e
    caixa.appendChild(novoElemento)

    // Adicionando comandos
    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")
    novoElemento.appendChild(comandos)
    const circulo = document.createElement("input")
    circulo.setAttribute("type","radio")
    circulo.setAttribute("name","circulo_curso")
    comandos.appendChild(circulo)
})

const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
//Eventos
btnCursoSelecionado.addEventListener("click", evt => {
    const todosRadios = [...document.querySelectorAll("input[type = radio]")]
    //Filtro
    let radioSelecionado = todosRadios.filter(e => {
        return e.checked
    })

    const cursoSelecionado = radioSelecionado[0]
    .parentNode
    .previousSibling
    .textContent

    window.alert("Curso Selecionado: "+cursoSelecionado)
})