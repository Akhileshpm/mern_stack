const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const exerciserouter = require('./routes/exercise')
const userrouter = require('./routes/users')
require('dotenv').config();

//middleware    
app.use(cors()) 
app.use(express.json())
app.use('/exercise',exerciserouter)
app.use('/user',userrouter)

const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open',()=>{
    console.log('connection ok!!')
})
const p =  5000 //process.env.PORT ||
 app.listen(p,()=>{
     console.log(`currently running on ${p}`)
 })