// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

let a;
let b;

// Сложение
a = 1;
b = 2;
console.log(calcAdd(a, b));

// Вычитание
a = 11;
b = 4;
console.log(calcSub(a, b));

// Умножение
a = 2;
b = 2;
console.log(calcMult(a, b));

// Деление
a = 6;
b = 2;
console.log(calcDiv(a, b));


function calcAdd(a, b) {
    return a + b;
}

function calcSub(a, b) {
    return a - b;
}

function calcMult(a, b) {
    return a * b;
}

function calcDiv(a, b) {
    return a / b;
}