
function createPerson (name, lastName, course){
    return {
        name: name,
        lastName: lastName,
        course: course,
        
        getFullName(){
            console.log(this.name, this.lastName);
        }
    }
}

console.log(createPerson('Sara', 'Ferreira', 'Sistemas e Mídias Digitais - UFC').getFullName());
console.log(createPerson('Isabel', 'Barros', 'Ciências Biológicas - UFC'));
console.log(createPerson('Lídia', 'Lopes', 'Ciências da Computação - UniFB'));