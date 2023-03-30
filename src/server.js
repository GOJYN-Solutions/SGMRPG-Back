const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(express.json()) //ativa o body
app.use(cors({
    origin: '*'
}));
app.use(routes);


app.listen(3333, ()=> console.log('Server On'))