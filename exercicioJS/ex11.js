function anoBissexto(ano) {
    if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
        console.log(ano + " é um ano bissexto.");
        return true;
    } else {
        console.log(ano + " não é um ano bissexto.");
        return false;
    }
}


console.log(anoBissexto(2000))
