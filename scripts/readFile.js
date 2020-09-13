const fs = require('fs')
const path = require('path')
exports.readFile = (filePath) => {
    return new Promise((resolve, reject) => {

        fs.readFile(filePath, {
            encoding: 'utf-8',
            flag: 'r'
        }, (err, data) => {
            if (err) console.error(err)
            resolve(data)
        })


    })
}
