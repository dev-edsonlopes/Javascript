//const c1 = document.getElementById("c1")
// c1.addEventListener("click", (evt) => {
//     const el  = evt.target
//     el.classList.add("destaque")
// })

const cursos = [...document.querySelectorAll(".curso")]

cursos.map(el => {
    el.addEventListener("click", (evt) => {
        const el  = evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML, "Foi clicado")

    })
})



