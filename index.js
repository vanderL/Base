const express = require('express')

const server = express()

server.get('/teste/:nome', function (req, res) {
    const nome =  req.params.nome
    return res.json({ message: `${nome}` })
})

server.listen(3000)