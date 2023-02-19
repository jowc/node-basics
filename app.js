const http = require("http")

const express = require("express")

const webRoutes = require('./routes/admin.routes')

const app = express()

app.use((req, res, next) => {
    console.log("Added nodeJs middleware")
    next()
})

app.use((req, res, next) => {
    console.log("another nodeJs middleware")
})

const server = http.createServer(app)

server.listen(3000)
console.log('server running on: http://localhost:3000')