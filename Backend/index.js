const express = require('express');
const connect = require('./connect');
const cors = require('cors');
const bodyparsor = require('body-parser');
const path = require('path');

const app = express()
connect()

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(cors());
app.use('/', require('./Routes/admin'));
app.use(bodyparsor.json());

app.listen(5000,()=>
{
    console.log("server is running on 5000");
    
});