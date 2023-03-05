const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/path')
const Product = require('../models/product.model')

exports.getAddProduct = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.htm'))
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
    // const formData = JSON.stringify(data)
    // fs.writeFileSync('./message.txt', formData)
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll()
    // console.log('Shop: ', products)
    res.send(products)
}