const express = require('express')
const productControllers = require('../controllers/products.controllers')

const routes = express.Router()

routes.get('/product/:id', productControllers.getProductDetail)
routes.get('/', productControllers.getProducts)


module.exports = routes