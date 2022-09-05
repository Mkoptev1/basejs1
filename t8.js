/*
С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

// 2^3=8
console.log(power(2, 3));

// 3^3=27
console.log(power(3, 3));

// 0^3=1
console.log(power(0, 3));

// 44^0=0
console.log(power(44, 0));

function power(val, pow, result = val) {
    if (val === 0) return 1;
    if (pow === 0) {
        return 0;
    } else if (pow <= 1) {
        return result;
    }

    result *= val;
    pow--;
    return power(val, pow, result);
}