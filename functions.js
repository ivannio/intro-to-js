console.log('functions');

let firstName = 'George';
let lastName = 'Weasley';

console.log(`${firstName} ${lastName}`);

firstName = 'Ron';
lastName = 'Weasley';

const sayName = (first, last) => {
    return (`${first} ${last}`);
}

console.log(sayName('Ivan', 'Phelps'));

const nuggetizer = (animal) => {
    return `${animal} nugget`;
}

const humaneNuggetizer = (animal) => {
    return animal;
}

const spamFactory = (anything) => {
    return 'spam';
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('octo'));
console.log(nuggetizer('pig'));

console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('fish'));
console.log(humaneNuggetizer('pig'));

console.log(spamFactory('chicken'));
console.log(spamFactory('fish'));
console.log(spamFactory('pig'));

const printToDOM = (message) => {
    document.getElementById('output').innerHTML += message;
}

let bandNumber = 0;
const takeNumber = (bandName) => {
    bandNumber += 1;
    printToDOM(`<h3>${bandNumber}. ${bandName}</h3>`);
}

takeNumber('Kero Kero Bonito');
takeNumber('Hannah Diamond');
takeNumber('Iglooghost');
takeNumber('Bill Wurtz');
