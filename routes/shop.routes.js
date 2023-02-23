const express = require('express')

const routes = express.Router()

// const rootDir = require('../utils/path')


routes.get('/', (req, res, next) => {
    res.send('<h2>Hello World</h2>')
})


module.exports = routes