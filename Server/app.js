const express = require('express');

const errorHandler = require('./middleware/erroHandler');

const dotenv =require('dotenv').config()


const port = process.env.PORT||3000 ;

const app = express();


app.get('/',async(req,res)=>{
    
})


app.use(errorHandler);

app.listen(port,()=>{
console.log(`app running on port number ${port}`)
})

