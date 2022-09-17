/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const basket = {
    goods: [
        {
            product_id: 1,
            product_name: "Яблоко",
            price: 200,
            qnt: 1
        },
        {
            product_id: 2,
            product_name: "Молоко",
            price: 120,
            qnt: 1
        },
        {
            product_id: 3,
            product_name: "Груша",
            price: 120,
            qnt: 1
        },
        {
            product_id: 4,
            product_name: "Хлеб",
            price: 40,
            qnt: 1
        },
        {
            product_id: 5,
            product_name: "Огурцы",
            price: 120,
            qnt: 1
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, basketItem) => totalPrice += basketItem.price * basketItem.qnt, 0);
    }
};

console.log(basket.countBasketPrice());