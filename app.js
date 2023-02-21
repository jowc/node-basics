const express = require("express")
const bodyParser = require("body-parser")

const adminRoutes = require('./routes/admin.routes')
const shopRoutes = require('./routes/shop.routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)

app.use(shopRoutes)

app.listen(3000)
console.log('server running on: http://localhost:3000')