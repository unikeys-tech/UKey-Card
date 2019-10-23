export class Product {
    id = 0;
    price = 0.0;
    name = '';
    icon = '';
}

export class CartItem {
    product = null;
    qty = 0;
    constructor(p:Product, qty: 1) {
        this.product = p;
        this.qty = qty;
    }
}
