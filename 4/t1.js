/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить 
следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее 
сообщение с помощью console.log и вернуть пустой объект.
*/


const strObj = {
    initObj(num) {
        if (isNaN(num)) {
            return null;
        }

        if (num < 0 || num > 999) {
            return null;
        }

        const numAsStr = num.toString();
        for (let i = 0; i < numAsStr.length; i++) {
            switch (i) {
                case 0:
                    this.единицы = null;
                    break;
                case 1:
                    this.десятки = null;
                    break;
                case 2:
                    this.сотни = null;
                    break;
            }
        }
        return numAsStr;
    },
    numToStr(num) {
        let numAsStr = this.initObj(num);
        if (numAsStr === null) {
            console.log(this);
            return -1;
        }

        numAsStr = numAsStr.split('').reverse().join('');
        for (let i = 0; i < numAsStr.length; i++) {
            let j = 0;
            switch (i) {
                case 0:
                    this.единицы = numAsStr[i];
                    break;
                case 1:
                    this.десятки = numAsStr[i];
                    break;
                case 2:
                    this.сотни = numAsStr[i];
                    break;
            }
            j++;
        }
        console.log(this);
    }
};

strObj.numToStr(245);
// strObj.numToStr(0);
// strObj.numToStr(1);
// strObj.numToStr(12);
// strObj.numToStr(123);
//strObj.numToStr(1000);


