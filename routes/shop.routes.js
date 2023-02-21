const express = require('express')

const routes = express.Router()


routes.get('/', (req, res, next) => {
    res.send('<h2>Hello World</h2>')
})


module.exports = routes