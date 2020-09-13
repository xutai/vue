const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3005
const { readFile } = require('./scripts/readFile')


app.use('/scripts', express.static(
    path.resolve(__dirname, 'scripts')
))
app.use('/styles', express.static(
    path.resolve(__dirname, 'styles')
))

app.use('/', express.static(
    path.resolve(__dirname, 'docs')
))


app.get('/*', async (req, res) => {
  
    const headPath = path.join(__dirname, 'template/head.html')
    const footPath = path.join(__dirname, 'template/foot.html')
    const contentPath = path.join(__dirname, req.path)
    let head = await readFile(headPath)
    let foot = await readFile(footPath)
    let content = await readFile(contentPath) || `<mark>${contentPath}</mark> not found`
    let html = `${head}${content}${foot}`
    res.send(html)
})



// app.use('/', express.static(
//    'docs'
// ))


// app.use('/docs', express.static(
//     path.resolve(__dirname, 'docs')
// ))


// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))







// ##### if using with pug

// app.set('views', './views')
// app.set('view engine', 'pug')

// app.get('/', function (req, res) {
//     res.render('index', {
//         title: 'Hey',
//         message: 'Hello there!',
//         content: '123'
//     })
// })

// pug will render the data as string, not render as dom element
// app.get('/*', [
//     function (req, res, next) {
//         const newPath = path.join(__dirname, req.path)
//         fs.readFile(
//             newPath, {
//             encoding: 'utf-8'
//         }, (err, data) => {
//             if (err) next(err)

//             res.render('index', {
//                 title: 'Hey',
//                 message: 'Hello there!',
//                 content: data
//             })

//         })
//     },
//     function (req, res) {
//         console.log('404')
//         res.send('404')
//     }
// ])