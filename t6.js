/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение(использовать switch).
*/

let a;
let b;

// Сложение
a = 1;
b = 2;
console.log(calc(a, b, '+'));

// Вычитание
a = 11;
b = 4;
console.log(calc(a, b, '-'));

// Умножение
a = 2;
b = 2;
console.log(calc(a, b, '*'));

// Деление
a = 6;
b = 2;
console.log(calc(a, b, '/'));

// Ерунда
a = 6;
b = 20;
console.log(calc(a, b, 'T'));


function calc(arg1, arg2, operation) {
    let result;

    switch (operation) {
        case '+':
            result = calcAdd(arg1, arg2);
            break;
        case '-':
            result = calcSub(arg1, arg2);
            break;
        case '*':
            result = calcMult(arg1, arg2);
            break;
        case '/':
            result = calcDiv(arg1, arg2);
            break;
        default:
            result = null;
    }

    return result;
}

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