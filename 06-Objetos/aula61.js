const Pessoa = {
    //Referencia aos elementos HTML
    nome: document.querySelector('#txt_nome'), 
    idade: document.querySelector('#txt_idade'),

    //Get e Set
    getNome: function () {
        return this.nome.value
    },
    getIdade: function () {
        return this.idade.value
    },
    setNome: function (nome) {
        this.nome.value = nome
    },

    setIdade: function(idade) {
        this.idade.value = idade
    }  

}

// Referencia aos elementos
const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

//Evento
btn_add.addEventListener('click', () => {
    
    const div = document.createElement('div')
    div.setAttribute('class', 'pessoa')
    res.appendChild(div)
    div.innerHTML += `Nome: ${Pessoa.getNome()}<br/>Idade: ${Pessoa.getIdade()}`

    //Limpa os INPUTS
    Pessoa.setNome("")
    Pessoa.setIdade("")
    Pessoa.nome.focus()

})