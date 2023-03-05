const express = require('express')
const router = express.Router()


const productControllers = require('../controllers/products.controllers')


router.get('/add-product', productControllers.getAddProduct)

router.post('/add-product', productControllers.postAddProduct)

router.use('/admin', (req, res, next) => {
    res.send("<h3>Node JS admin dashboard</h3>")
    // next()
})

module.exports = router