/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

checkNumbers(100);

function checkNumbers(checking) {
    for (let i = 2; i <= checking; i++) {
        if (isSimpleNumber(i)) {
            console.log(i);
        }
    }
}

function isSimpleNumber(value) {
    for (let i = 2; i < value; i++) {
        if (value % i == 0) return false;
    }
    return true;
}