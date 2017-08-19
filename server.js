const express = require('express')
const path = require('path')
const serverStatic = require('serve-static')

const app = express()
app.use(serverStatic(path.join(__dirname, 'dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('server started at: ', port)