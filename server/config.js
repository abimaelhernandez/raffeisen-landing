const express = require('express')
const app = express()
const path = require('path')

app.use(express(__dirname + "/../client/dist"))

module.exports = app