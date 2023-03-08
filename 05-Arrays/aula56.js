//Template Strings em Javascript 
const caixa = document.querySelector('#caixa')

const curso = 'Javascript'
const github = 'dev-edson'

const frase = `Estudando ${curso} Moderno, e atualizando os conteúdos no github.${github}.io`

caixa.innerHTML = frase