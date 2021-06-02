const arrayTen = [
    {name: 'Ben', url: 'http://www.ben.com', number: 1},
    {name: 'Valter', url: 'http://www.valter.com', number: 2},
    {name: 'Carlos', url: 'http://www.carlos.com', number: 3},
    {name: 'Benjamin', url: 'http://www.benjamin.com', number: 4},
    {name: 'Linda', url: 'woof.linda.com', number: 5},
    {name: 'Federico', url: 'http://www.federico.com', number: 6},
    {name: 'Gina', url: 'http://www.gina.com', number: 7},
    {name: 'Anne', url: 'http://www.anne.com', number: 8},
    {name: 'Marry', url: 'http://www.marry.com', number: 9},
    {name: 'Jane', url: 'http://www.jane.com', number: 10},
];

const arrayNames = arrayTen.map(function(name) {
    return name.name;
});

arrayTen.map(function(x) {
    if (x.url.slice(0,4) === 'http') {
        console.log(x.url);
    }
    else {
        console.log(`Invalid URL for ${x.name}`);
    }
});

arrayTen.forEach((element, i) => {
    const index = Math.floor(Math.random() * arrayTen.length);
    arrayTen[i] = arrayTen[index];
    arrayTen[index] = element;
});

console.log('4:', arrayTen);

const sortedArray = arrayTen.map(function(x) {
    return x.number;
});
sortedArray.sort();
sortedArray.forEach((sortedElement, i) => {
    arrayTen.forEach(element => {
        if(sortedElement === element.number) {
            sortedArray[i] = element;
        }
    });
});

console.log('5:', sortedArray);

const invertArray = arrayTen.map(function(x) {
    return x.number;
});
invertArray.sort();
invertArray.reverse();
invertArray.forEach((sortedElement, i) => {
    arrayTen.forEach(element => {
        if(sortedElement === element.number) {
            invertArray[i] = element;
        }
    });
});

console.log('6:', invertArray);

let string = '';
invertArray.forEach((element, i) => {
    if (i === invertArray.length - 1) {
        string = string + 'and ' + element.name;
        return;
    }
    string = string + element.name + ', ';
});

console.log('7:', string);