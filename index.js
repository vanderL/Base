const express = require('express')

const server = express()

const users =['Vander', 'Fulano', 'Sicrano']


server.get('/teste/:index', function (req, res) {
    const index =  req.params.index
    return res.json(users[index])
})

server.listen(3000)