const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dboptions ={
    host:'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'alumnos'
}


//middlewares--------------------------------
app.use(myconn(mysql,dboptions, 'single'))
app.use(express.json())
//routes -------------------------------------------
app.get('/',(req,res)=>{
   res.send('bienvenido al server')
   
})
app.use('/api', routes)


//server run-------------------------------------------------------------------
app.listen(9000, ()=>{
    console.log('server esta en funcionamiento', app.get('port'))
})