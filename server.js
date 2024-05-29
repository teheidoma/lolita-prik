const express = require("express")
const path = require("path")
const app = express()
const port = 3000

app.use(express.json())

app.use(express.static("./"))

app.use('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "public/index.html"))
})

app.listen(port, () => {
    console.log("Server running on port " + port)
})