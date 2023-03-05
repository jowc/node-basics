const products = []


module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        return products.push(this.title)
    }

    static fetchAll() {
        return products
    }

}