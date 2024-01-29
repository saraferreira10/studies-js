const arr = ["Sara", "Rebeca", "Rosiane", "Ednaldo"];

arr.map((element) => console.log(element));
console.log(arr.length);

//adiciona no começo
arr.unshift("Maria");

//remove o último
console.log(arr.pop());

//remove o primeiro
console.log(arr.shift());

//remove o elemento e não o index
delete arr[1];

console.log(arr);

//fatia o array 
console.log(arr.slice(0, 2));
