const express = require('express')
const productControllers = require('../controllers/products.controllers')

const routes = express.Router()

routes.get('/', productControllers.getProducts)


module.exports = routes