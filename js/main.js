const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],
        filtered: [],
        cart: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        imgCart: 'https://via.placeholder.com/100x50',
        userSearch: '',
        show: false
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            let find = this.cart.find(el => el.id_product === product.id_product);
            if (find) {
                find.quantity++;
            }
            else {
                const newProduct = Object.assign({ quantity: 1 }, product);
                this.cart.push(newProduct);
            }
        },
        filterCatalog() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
        remove(item) {
            if (item.quantity > 1) {
                item.quantity--;
            }
            else {
                this.cart.splice(this.cart.indexOf(item), 1);
            }
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cart.push(el);
                }
            })
        console.log(this.cart);
    },
})
