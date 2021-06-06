const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class AllProducts {
    constructor(container = ".products") {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    _getSumm() {
        let total = 0;
        for (let product of this.goods) {
            total += product.price;
        }
        return total;
    }

    render() {
        const blockContainer = document.querySelector(this.container);
        for (let product of this.goods) {
            const prouctObj = new Product(product);
            blockContainer.insertAdjacentHTML('beforeend', prouctObj.render());
        }
    }
}

class Product {
    constructor(product, img = "http://placehold.it/360x180") {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="prodcut-item product-id="${this.id}"> 
    <div>
    <div class="card-image">
    <img src="${this.img}" alt="photo" height="100%" width="100%">
    </div>
    <h3>${this.title}</h3> 
    <p>${this.price} &#8381;</p> 
    <button class="card-btn">Добавить в корзину</button></div></div>`
    }
}

class Cart {
    constructor(container = ".cart-info") {
        this.container = container;
        this.goods = [];
        this.amount = 0;
        this.countGoods = 0;
        this._getProducts()
            .then(data => {
                this.amount = data.amount;
                this.countGoods = data.countGoods;
                this.goods = [...data.contents];
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    _getSumm() {
        let total = 0;
        for (let product of this.goods) {
            total += product.price;
        }
        return total;
    }

    render() {
        const blockContainer = document.querySelector(this.container);
        for (let product of this.goods) {
            const prouctObj = new CartProduct(product);
            blockContainer.insertAdjacentHTML('beforeend', prouctObj.render());
        }
        const amount = document.querySelector('.amount');
        const count = document.querySelector('.count');
        amount.textContent = "Товаров в коризне: " + this.countGoods;
        count.textContent = "Сумма : " + this.amount;
    }
}

class CartProduct {
    constructor(product, img = "http://placehold.it/70x50") {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.quantity = product.quantity;
        this.img = img;
    }

    render() {
        return `<div class="prodcut-item product-id="${this.id}" style="margin-bottom:10px"> 
    <div>
    <div class="card-image">
    <img src="${this.img}" alt="photo" height="100%" width="100%">
    </div>
    <h3>${this.title}</h3> 
    <h4>Количество: ${this.quantity}</h4> 
    <p>${this.price} &#8381;</p> 
    <button class="card-btn">Удалить</button></div></div>`
    }
}


const catalog = new AllProducts();
const cart = new Cart();


function showCart() {
    document.querySelector('.cart-info').classList.toggle('show');
}

