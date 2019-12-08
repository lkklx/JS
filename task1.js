const x = parseFloat(prompt('Введи x'));
console.log("x = " + x);
const y = parseFloat(prompt('Введи y'));
const check = y >= 0 && ((x <= 0 && y <= x + 4) || (x >= 0 && y <= 4 - x))
console.log("y = " + y);
console.log(typeof (y))
check ? console.log('Входит') : console.log('Не выходит')
