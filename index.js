const express = require('express')

const server = express()

server.get('/teste', function (req, res) {
    return res.json({ message: 'Hello!! xD' })
})

server.listen(3000)