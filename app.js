//const { connect } = require('diskdb');
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express()

const cervezas = require('./routes/cervezas')
const bares = require('./routes/bares')
const usuario = require('./routes/usuario')


// DATABASE CONNECTION
async function connectAtlas(){
    await dbConnection()
}
connectAtlas()
//MIDDLEWARE
app.use(express.json())

//ROUTES
app.use('/cervezas', cervezas)
app.use('/bares', bares)
app.use('/usuarios', usuario)



app.listen(process.env.PORT)