const express = require("express")
const app = express()


app.use(express.static(__dirname + "/../client/dist"))

module.exports = app;