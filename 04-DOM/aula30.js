// DOM Método getElementById

const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")

const arrayElementos = [dc1, dc2, dc3, dc4, dc5]
// for(d of arrayElementos) {
//     d.innerHTML = "Testando Arrays"
// }


//preferences
arrayElementos.map(e => {
    e.innerHTML = "Testando Array no DOM"
    console.log(e)
})