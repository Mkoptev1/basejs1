const cartRender = {
    render(good) {
        return `<div class="cart-item cart-item-padding">
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

const productRender = {
    renderGridItem(good) {
        return `<div class="product-item product-item-padding">
                    <div class="product-item-text">Наименование: ${good.product_name}</div>
                    <div class="product-item-text">Цена: ${good.price}</div>
                    <div class="product-item-text">Количество: ${good.qnt}</div>
                    <div class="product-item-text">Стоимость: ${good.qnt * good.price}</div>
                    <div class="product-bttn-container"><button class="product-bttn-add" data-product_id="${good.product_id}">В корзину</button></div>
                </div>`;
    }
}

const product = {
    productNode: null,
    cart: {},
    productRender,
    productList: null,
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
    init() {
        if (!this.productNode) {
            this.productNode = document.querySelector('.product-list');
            this.productNode.addEventListener('click', event => this.addToCart(event));
        }
    },
    addToCart(event) {
        if (!event.target.classList.contains('product-bttn-add')) return;
        const product_id = +event.target.dataset.product_id;
        const orderedProduct = this.goods.find((item) => item.product_id === product_id);
        this.cart.addToCart(orderedProduct);;
    },
    render(cart) {
        this.cart = cart;
        this.init();
        for (let good = 0; good < this.goods.length; good++) {
            this.productNode.insertAdjacentHTML('beforeend', this.productRender.renderGridItem(this.goods[good]));
        }
    }
};

const cart = {
    cartNode: null,
    cartBttnClear: null,
    cartBttnRestore: null,
    cartRender,
    goodsOrig: [],
    goods: [
        {
            product_id: 1,
            product_name: "Яблоко",
            price: 200,
            qnt: 1
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price * cartItem.qnt, 0);
    },
    countBasketQnt() {
        return this.goods.reduce((totalQnt, cartItem) => totalQnt += cartItem.qnt, 0);
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
            this.cartNode = document.querySelector('.cart-list');
            this.cartBttnClear = document.querySelector('.cart-bttn-clear');
            this.cartBttnRestore = document.querySelector('.cart-bttn-restore');
            this.cartBttnClear.addEventListener('click', this.clearCart.bind(this));
            this.cartBttnRestore.addEventListener('click', this.restoreCart.bind(this));
        }
    },
    render() {
        this.init();
        this.cartNode.innerHTML = '';
        if (this.goods.length) {
            for (let good = 0; good < this.goods.length; good++) {
                this.cartNode.insertAdjacentHTML('beforeend', this.cartRender.render(this.goods[good]));
            }
            this.cartNode.insertAdjacentHTML('beforeend', this.cartRender.renderTotal(this.countBasketQnt(), this.countBasketPrice()));
        } else {
            this.cartNode.insertAdjacentHTML('beforeend', this.cartRender.renderEmpty());
        }
    },
    addToCart(product) {
        if (product) {
            foundGood = this.goods.find((item) => item.product_id === product.product_id);
            if (foundGood) {
                foundGood.qnt++;
            } else {
                product.qnt = 1;
                this.goods.push(product);
            }
            this.render();
        }
    }
};

window.onload = (event) => {
    product.render(cart);
    cart.render();
};