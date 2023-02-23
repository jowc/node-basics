const bodyParser = require("body-parser")
const path = require("path")
const express = require("express")

const adminRoutes = require('./routes/admin.routes')
const shopRoutes = require('./routes/shop.routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)

app.use(shopRoutes)

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.htm'))
})

app.listen(3000)
console.log('server running on: http://localhost:3000')