// DOM Método getElementByTagName

const colecaoHTML = [...document.getElementsByTagName("div")]

console.log(colecaoHTML)
colecaoHTML.map(e => {
    console.log(e.innerHTML)
})