const products = [
    { id: 1, title: "Phone", price: 100 },
    { id: 2, title: "Tablet", price: 200 },
    { id: 3, title: "Notebook", price: 300 },
    { id: 4, title: "Apple", price: 2000 }
]

const renderProduct = (item, img = "http://placehold.it/360x180") => {
    return `<div class="prodcut-item"> 
    <div>
    <div class="card-image">
    <img src="${img}" alt="photo" height="100%" width="100%">
    </div>
    <h3>${item.title}</h3> 
    <p>${item.price} &dollar;</p> 
    <button class="card-btn">Добавить в корзину</button></div></div>`
};

const renderPage = listOfProduct => {
    const productList = listOfProduct.map(item => renderProduct(item)).join(' ');
    document.querySelector(".products").innerHTML = productList;
}

renderPage(products);


class Cart {
    constructor(container = ".container") {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: "Phone", price: 100 },
            { id: 2, title: "Tablet", price: 200 },
            { id: 3, title: "Notebook", price: 300 },
            { id: 4, title: "Apple", price: 2000 }
        ];
    }

    _getSumm() {     //Сумма товаров
        let total = 0;
        for (let product of this.goods) {
            total += product.price;
        }
        return total;
    }

    addProduct() { }

    deleteProduct() { }

    deleteAllProducts() { }

    render() {
        const blockContainer = document.querySelector(this.container);
        for (let product of this.goods) {
            const prouctObj = new Product(product);
            blockContainer.insertAdjacentHTML('beforeend', prouctObj.render());
        }
    }
}

class Product {
    constructor(product, img = "http://placehold.it/360x18") {
        this.title = title;
        this.price = price;
        this.id = id;
        this.img = img;
    }

    reder() {
        return `<div class="prodcut-item product-id="${this.id}"> 
    <div>
    <div class="card-image">
    <img src="${this.img}" alt="photo" height="100%" width="100%">
    </div>
    <h3>${this.title}</h3> 
    <p>${this.price} &dollar;</p> 
    <button class="card-btn">Добавить в корзину</button></div></div>`
    }
}