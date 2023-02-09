// DOM Método getElementByClassName

const cursos = [...document.getElementsByClassName("curso")]
const cursoCor1 = [...document.getElementsByClassName("c1")]
const cursoCor2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[0]

cursoEspecial.classList.add("destaque")
console.log(cursos)
console.log(cursoCor1)
console.log(cursoCor2)

cursoCor2.map((e) => {
    e.classList.add("destaque")
})

