let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

/*
let d = a

a = b //a = 'B', b = 'B', c = 'C'
b = c //a = 'B', b = 'C', c = 'C'
c = d //a = 'B', b = 'C', c = 'A'
*/

[a, b, c] = [b, c, a]

console.log(a, b, c)