const http = require("http")
const webRoutes = require('./routes/admin.routes')

const server = http.createServer(webRoutes)

server.listen(3000)
console.log('server running on: http://localhost:3000')