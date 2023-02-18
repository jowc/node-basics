const fs = require('fs')


const webRoutes = (req, res) => {

    const url = req.url
    const method = req.method
    res.setHeader('content-type', 'text/html')

    if (url === '/') {
        res.write("<html>")
        res.write('<body><form action="/message" method="POST"><input type="text" name="fullname"><button>submit</button></form></body>')
        res.write("</html>")
        return res.end()
    }

    if (url === '/message' && method == 'POST') {
        const body = []
        req.on('data', (stream) => {
            body.push(stream)
        })
        req.on('end', () => {
            const buffer = Buffer.concat(body).toString()
            const message = buffer.split('=')[1]
            fs.writeFileSync('message.txt', message)
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }

    res.setHeader('content-type', 'text/html')
    res.write("<html>")
    res.write("<body><h2>Server running</h2></body>")
    res.write("</html>")
    res.end()
}

module.exports = webRoutes