const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const FichaController = require('./controllers/FichaController')
const LoginController = require('./controllers/LoginController')

//User
routes.get('/users', UserController.getAll)
routes.get('/users/:userId', UserController.getOne)

routes.post('/users', UserController.register)
routes.post('/users/update/:userId', UserController.update)

routes.delete('/users/:userId', UserController.remove)


//Ficha
routes.get('/fichas', FichaController.getAll)
routes.get('/users/:userId/fichas', FichaController.getAllUser)
routes.get('/users/:userId/fichas/:fichaId', FichaController.getOne)

routes.post('/users/:userId/fichas', FichaController.register)
routes.post('/users/:userId/update/:fichaId', FichaController.update)

routes.delete('/users/:userId/ficha/:fichaId', FichaController.remove) 

//Login
routes.post('/login', LoginController.login)

module.exports = routes