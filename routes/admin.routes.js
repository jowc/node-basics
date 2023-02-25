const fs = require('fs')
const path = require('path')
const express = require('express')
const routes = express.Router()

const rootDir = require('../utils/path')


const products = []


routes.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.htm'))
})

routes.post('/add-product', (req, res) => {
    const data = req.body
    products.push({ title: data.title })
    const formData = JSON.stringify(data)
    fs.writeFileSync('./message.txt', formData)
    res.redirect('/')
})

routes.use('/admin', (req, res, next) => {
    res.send("<h3>Node JS admin dashboard</h3>")
    // next()
})

module.exports = { routes, products }