const cartItemRender = {
    render(good) {
        return `<div class="cart-item cart-item_padding">
                    <p class="cart-item-text">Наименование: ${good.product_name}</p>
                    <p class="cart-item-text">Цена: ${good.price}</p>
                    <p class="cart-item-text">Количество: ${good.qnt}</p>
                    <p class="cart-item-text">Стоимость: ${good.qnt * good.price}</p>
                </div>`;
    },
    renderEmpty() {
        return '<p>Корзина пуста</p>';
    },
    renderTotal(qntTotal, priceTotal) {
        return `<div class="cart-total">
                <p class="cart-item-text">В корзине ${qntTotal} товаров на сумму ${priceTotal} рублей</p>
            </div>`;
    }
}

const cart = {
    cartNode: null,
    cartBttnClear: null,
    cartBttnRestore: null,
    cartItemRender,
    goodsOrig: [],
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
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price * cartItem.qnt, 0);
    },
    clearCart() {
        if (this.goods.length) {
            this.cartNode.innerHTML = '';
            this.goodsOrig = this.goods;
            this.goods = [];
            this.render();
        }
    },
    restoreCart() {
        if (this.goodsOrig.length) {
            this.cartNode.innerHTML = '';
            this.goods = this.goodsOrig;
            this.goodsOrig = [];
            this.render();
        }
    },
    init() {
        if (!this.cartNode) {
            this.cartNode = document.querySelector('.cart');
            this.cartBttnClear = document.querySelector('.cart-bttn-clear');
            this.cartBttnRestore = document.querySelector('.cart-bttn-restore');
            this.cartBttnClear.addEventListener('click', this.clearCart.bind(this));
            this.cartBttnRestore.addEventListener('click', this.restoreCart.bind(this));
        }
    },
    render() {
        this.init();
        if (this.goods.length) {
            for (let good = 0; good < this.goods.length; good++) {
                console.log(good);
                this.cartNode.insertAdjacentHTML('beforeend', this.cartItemRender.render(this.goods[good]));
            }
            this.cartNode.insertAdjacentHTML('beforeend', this.cartItemRender.renderTotal(this.goods.length, this.countBasketPrice()));
        } else {
            this.cartNode.innerHTML = '';
            this.cartNode.insertAdjacentHTML('beforeend', this.cartItemRender.renderEmpty());
        }
    }
};

window.onload = (event) => {
    cart.render();
};