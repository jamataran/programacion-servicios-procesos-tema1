var numbers = [1,5,10,15];

var dobles = numbers.map(function (x){return x*2});
console.log('Dobles: ' + JSON.stringify(dobles));

var filtrado = numbers.filter(function (x){return x>10});
console.log('Filtrado: ' + JSON.stringify(filtrado));

const REDUCER = (acumulador, currentValue) => acumulador + currentValue;
const numberReducido = numbers.reduce(REDUCER);
console.log('numberReducido: ' + JSON.stringify(numberReducido));

