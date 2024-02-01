//atribuição via desestruturação

let a = 'A';
let b = 'B';
let c = 'C';

const letrasArr = [b, c, a];
[a, b, c] = letrasArr;

console.log(a, b, c);

const numerosArr = [1, 2, 3, 4, 5, 6, 7];
const [primNum, , terNun, ...restoArr] = numerosArr;
console.log(primNum, terNun);
console.log(restoArr);

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros[0][2]);
const [, [, , seis]] = numeros;
console.log(seis);