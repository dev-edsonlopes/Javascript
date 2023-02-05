// Loops FOR IN e FOR OF em Javascript

let num = [10,20,30,40,50]

// For tradicional:
console.log('FOR:')
for(i = 0; i < num.length; i++) {
    console.log(num[i])
}
console.log()


// FOR IN 
console.log('FOR in:')
for(n in num) {
    console.log(num[n])
}
console.log()

// FOR OF 
console.log('FOR of:')
for(x of num) {
    console.log(x)
}

// DOM

// let dom = document.getElementsByTagName("div")

// for(d1 of dom) {
//     console.log(d1.innerHTML="Nome")
// }

// for(d2 in dom) {
//     console.log(d2)
// }