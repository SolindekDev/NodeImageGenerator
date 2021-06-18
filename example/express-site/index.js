// Template from https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// We import our package to code
const imageGenerator = require('nodeimagegenerator')

app.get('/', (req, res) => {
    //We send a image URL
    res.send(imageGenerator.randomDog())
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})