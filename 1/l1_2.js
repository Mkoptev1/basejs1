/*
2. Работа с переменными. Объявить две переменные: admin и name. Записать в name строку "Василий";
Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
*/

const userName = prompt("Как зовут админа?");
if (userName.length > 0) {
    let admin = userName;
    alert(`Имя админа: ${admin}`);
} else {
    alert('Некорректный ввод. Забыли ввести имя админа.');
}