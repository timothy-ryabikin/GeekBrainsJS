const products = [
    { id: 1, title: "Phone", price: 100 },
    { id: 2, title: "Tablet", price: 200 },
    { id: 3, title: "Notebook", price: 300 },
    { id: 4, title: "Apple", price: 2000 },
]

const renderProduct = (item, ...args) => {
    return `<div class="prodcut-item"> 
    <div>
    <div class="card-image">
    <img src="http://placehold.it/360x180" alt="photo" height="100%" width="100%">
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