// método FILTER em Javascript

const idades = [15,21,16,18,30,45,14,13,10]
console.log(idades)


const deMaior = idades.filter(idade => {
    return idade >= 18
})
console.log(deMaior.sort())

const deMenor = idades.filter(idade => {
    return idade < 18
})
console.log(deMenor.sort())