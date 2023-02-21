const express = require('express')
const routes = express.Router()
const fs = require('fs')


routes.get('/add-product', (req, res) => {
    res.send('<form action="/add-product" method="POST"><input type="text" name="fullname"><button>submit</button></form>')
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