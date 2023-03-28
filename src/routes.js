const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/users', UserController.getAll)
routes.get('/users/:id', UserController.getOne)

routes.post('/users', UserController.register)
routes.post('/users/update', UserController.update)

routes.delete('/users', UserController.remove)

module.exports = routes