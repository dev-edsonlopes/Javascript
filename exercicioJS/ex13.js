function diaUtil(semana) {
    let nomeDia = ''
    switch(semana) {
        case 1: 
            nomeDia = 'domingo'
            break
        
        case 2: 
            nomeDia = 'segunda'
            break
        
        case 3: 
            nomeDia = 'terca'
            break
        
        case 4: 
            nomeDia = 'quarta'
            break
        
        case 5: 
            nomeDia = 'quinta'
            break
        
        case 6: 
            nomeDia = 'sexta'
            break
        
        case 7: 
            nomeDia = 'sabado'
            break
        
        default:
            nomeDia = 'Valor ínvalido'
    }

    if(semana > 1 && semana < 7) {
        return nomeDia + ' é dia util'
    } else {
        return nomeDia + ' Não é dia util'
    }
}

console.log(diaUtil(2))