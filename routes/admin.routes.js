const fs = require('fs')
const path = require('path')
const express = require('express')
const routes = express.Router()


routes.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.htm'))
})

routes.post('/add-product', (req, res) => {
    const data = req.body
    const formData = JSON.stringify(data)
    console.log(data)
    fs.writeFileSync('./message.txt', formData)
    res.send(`Form data: ${formData}`)
})

routes.use('/admin', (req, res, next) => {
    res.send("<h3>Node JS admin dashboard</h3>")
    // next()
})

module.exports = routes