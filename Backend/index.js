const express = require('express')

const server = express()

server.use(express.json())

const users =['Vander', 'Fulano', 'Sicrano']

server.use((req, res, next) => {
    console.time('Request')
    console.log(`Método: ${req.method}; path: ${req.url}`)

    next()

    console.timeEnd('Request')
})

function checkUserExists(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: 'User name is required' })
    }

    return next()
}

function checkUserInArray(req, res, next) {
    const user = users[req.params.index]
    if (!user) {
        return res.status(400).json({ error: 'User does not exists' })
    }

    req.user = user

    return next()
}
//app.get('/', UsersController.index)
//    .post('/', UsersController.create)
//    .put('/', UsersController.update)

server.get('/users', (req, res) => {
    return res.json(users)
})

server.get('/users/:index', checkUserInArray, function (req, res) {
    return res.json(req.user)
})

server.post('/users', checkUserExists, (req, res) => {
    const { name } = req.body

    users.push(name)

    return res.json(users)
})

server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
    const { index } = req.params
    const { name } = req.body

    users[index] = name;

    return res.json(users)

})

server.delete('/users/:index', (req, res) => {
    const { index } =  req.params;

    users.splice(index, 1)

    return res.json(users)
})

server.listen(3333)