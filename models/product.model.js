const fs = require('fs')
const path = require('path')

const dbFile = path.join(process.mainModule?.filename, '..', 'data', 'db.json')

const handleFetchDB = cb => fs.readFile(dbFile, (err, data) => {
    if (err) { cb([]) } else { cb(JSON.parse(data)) }
})

module.exports = class Product {
    constructor(title, description, price) {
        this.title = title
        this.description = description
        this.price = price
    }

    save() {
        this.id = Math.random().toString()
        fs.readFile(dbFile, (err, data) => {
            let products = []
            if (!err) {
                products = JSON.parse(data)
                products.push(this)
            }
            fs.writeFile(dbFile, JSON.stringify(products), err => {
                if (err) console.log("Write to db error: ", err)
            })
        })
    }

    static fetchAll(cb) {
        handleFetchDB(cb)
    }

    static findById(id, cb) {
        handleFetchDB(products => {
            const product = products.find(prod => prod.id == id)
            cb(product)
            // console.log(product)
        })
    }

}