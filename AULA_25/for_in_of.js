//for in

const frutas = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Sara',
    sobrenome: 'Ferreira',
    idade: 18
}

for (let i in frutas) {
    console.log(frutas[i]);
}
console.log();

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}

console.log();

//for of
const nome = ['Sara Ferreira', 'Rebeca Ferreira'];

//vem o valor e não o indíce
for (let valor of nome) {
    console.log(valor);
}

console.log();

nome.forEach(element => {
    console.log(element)
});