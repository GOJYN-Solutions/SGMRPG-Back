const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json()) //ativa o body
app.use(routes);


app.listen(3333, ()=> console.log('Server On'))