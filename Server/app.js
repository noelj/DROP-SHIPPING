const express = require('express');

const errorHandler = require('./middleware/erroHandler');

const dotenv =require('dotenv').config()

const bodyparse = require('body-parser');

const mongoose = require('mongoose')

const uri = process.env.URI;

const port = process.env.PORT||3000 ;

const app = express();



app.use(bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json())


app.get('/',async(req,res)=>{
    
})


app.use(errorHandler);

mongoose.connect(uri).then((result) => {
    console.log('database connected')
   

app.listen(port,()=>{
console.log(`app running on port number ${port}`)
})


}).catch((err) => {
    
});