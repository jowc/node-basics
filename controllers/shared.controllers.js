const path = require('path')

const baseDir = require('../utils/path')

exports.notFound = (req, res) => {
    res.status(404).sendFile(path.join(baseDir, 'views', '404.htm'))
}