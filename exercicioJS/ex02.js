// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function tipoTriangulo(ladoA, ladoB, ladoC) {

    if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {

        if ((ladoA == ladoB) && (ladoA == ladoC)) {
            return console.log("Triângulo EQUILÁTERO")
        } else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)) {
            return console.log("Triângulo ISÓSCELES")
        } else if (!((ladoA == ladoB) && (ladoA == ladoC)))
            return console.log("Triângulo ESCALENO")

    } else {
        return console.log("Não é possível formar um triângulo com as medidas informadas")
    }

}

tipoTriangulo(10, 5, 3)
