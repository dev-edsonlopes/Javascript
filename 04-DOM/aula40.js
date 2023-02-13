const caixa = document.getElementById("caixa")

// const novoElemento = document.createElement("div")
// novoElemento.setAttribute("id","c7")
// novoElemento.setAttribute("class", "curso c1")
// novoElemento.innerHTML = "ReactNative"
// caixa.appendChild(novoElemento)


const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative", "NodeJS"]

cursos.map((nomeCurso, i) => {
    const newElement = document.createElement("div")
    newElement.setAttribute("id", "c" +i)
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = nomeCurso
    caixa.appendChild(newElement)
})

