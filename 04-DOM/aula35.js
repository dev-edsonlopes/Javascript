const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn = document.getElementById("btn-copiar")
const cursos = [...document.querySelectorAll(".curso")]


cursos.map(e => {
    e.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", () => {
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map(el => {
        caixa2.appendChild(el)
    })
})









