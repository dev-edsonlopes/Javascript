const box = document.getElementById("caixa")

// const novoElemento = document.createElement("div")
// novoElemento.setAttribute("id","c7")
// novoElemento.setAttribute("class", "curso c1")
// novoElemento.innerHTML = "ReactNative"
// caixa.appendChild(novoElemento)


const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative", "NodeJS"]

cursos.map((nomeCurso, i) => {

    //create element
    const newElement = document.createElement("div")
    newElement.setAttribute("id", "c" +i)
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = nomeCurso
    box.appendChild(newElement)

    // icone lixeira
    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src","https://cdn-icons-png.flaticon.com/512/73/73806.png")
    btn_lixeira.setAttribute("class", "btn-lixeira")
    newElement.appendChild(btn_lixeira)

    //remove
    btn_lixeira.addEventListener("click", evt => {
        box.removeChild(evt.target.parentNode)
    })

})




