const express = require('express')
const router = express.Router()


const productControllers = require('../controllers/products.controllers')
const adminControllers = require('../controllers/admin.controllers')


router.get('/add-product', productControllers.getAddProduct)

router.post('/add-product', productControllers.postAddProduct)

router.use('/', adminControllers.loadAdmin)

module.exports = router