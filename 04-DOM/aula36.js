const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn_copiar = document.getElementById("btn-copiar")
const btn_remover = document.getElementById("btn-remover")
const cursos = [...document.querySelectorAll(".curso")]


cursos.map(e => {
    e.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})


btn_copiar.addEventListener("click", () => {
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map(e => {
        caixa2.appendChild(e)
        
    })    
})


btn_remover.addEventListener("click", (evt) => {
    const cursoNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado")]
    cursoNaoSelecionados.map(e => {
        caixa1.appendChild(e)

    })  
})






