//atribuição via desestruturação

const pessoa = {
    nome: 'Sara',
    sobrenome: 'Ferreira',
    linguagens: {
        java: 'java',
        javascript: 'javascript'
    }
}

//valor padrão
const { nome = '', linguagens: { java: lang1, javascript }} = pessoa;
console.log(nome, lang1, javascript);