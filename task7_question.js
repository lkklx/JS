
let Year = new Date().getFullYear();
console.log(Year);


let InputYearOfBirth = () => {
    let YearOfBirth = parseInt(prompt('Введите год рождения ****')) || 0
    console.log(YearOfBirth);

    let Year = YearOfBirth ;
    let i = 0;     //i внутри цикла и снаружи
    for (i; Year > 1; i++) {
        Year /= 10;
    }

    if (i != 4) {
        alert('Неверный формат ввода! Повторите ввод');
        InputYearOfBirth();
    }

    else return YearOfBirth;
}


let YearOfBirth = InputYearOfBirth();
console.log(YearOfBirth);