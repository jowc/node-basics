const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/path')
const Product = require('../models/product.model')

exports.getAddProduct = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.htm'))
}

exports.postAddProduct = (req, res) => {
    const title = req.body.title,
        description = req.body.description,
        price = req.body.price
    const product = new Product(title, description, price)
    product.save()
    // const formData = JSON.stringify(data)
    // fs.writeFileSync('./message.txt', formData)
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products => res.send(products))
    // console.log('Shop: ', products)  
}

exports.getProductDetail = (req, res) => {
    const productId = req.params.id
    Product.findById(productId, product => {
        if (product) { res.send(product) } else {
            res.send("Product does not exist.")
        }
    })
}