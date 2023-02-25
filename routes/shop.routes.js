const express = require('express')

const routes = express.Router()

const { products } = require('./admin.routes')

// const rootDir = require('../utils/path')


routes.get('/', (req, res, next) => {
    console.log("Shop: ", products)
    res.send('<h2>Hello World</h2>')
})


module.exports = routes