const caixa = document.querySelector(".caixa")
const cursos = [...document.querySelectorAll('.curso')]

caixa.addEventListener("click", () => {
    console.log("clicou!")
})

cursos.map(e => {
    e.addEventListener("click", (evt)=> {
        evt.stopPropagation()
    })
})