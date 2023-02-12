const caixa = document.querySelector(".caixa")
const cursos = [...document.querySelectorAll(".curso")]

console.log(caixa.hasChildNodes())
console.log(cursos[0].hasChildNodes())
console.log(cursos[0].childNodes)

console.log(cursos[0].children.length > 0 ? "Possui filhos" : "Não possui filhos")

console.log(caixa.firstElementChild)
caixa.firstElementChild.innerHTML ="TESTE"
console.log(caixa.children[1])