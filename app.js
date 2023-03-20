const bodyParser = require("body-parser")
const path = require("path")

const express = require("express")
const app = express()

const adminRoutes = require('./routes/admin.routes')
const shopRoutes = require('./routes/shop.routes')

const sharedControllers = require('./controllers/shared.controllers')

app.listen(3000)
console.log('server running on: http://localhost:3000')


app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)

app.use(shopRoutes)

app.use(sharedControllers.notFound)