/*
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32,
где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/

function temperCel2Fahr(celsius) {
    let fahrenheit = null;
    fahrenheit = (9 / 5) * celsius + 32;
    return fahrenheit;
}

const celsiusInput = +(prompt("Введите температуру в градусах по Цельсию"));
if (!Number.isNaN(celsiusInput)) {
    alert(`Температура в градусах по Фаренгейту: ${temperCel2Fahr(celsiusInput)}`);
} else {
    alert('Некорректный ввод. Температура по Цельсию должна быть числом.');
}