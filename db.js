const mongoose = require("mongoose");

const URL= 'mongodb://localhost:27017/hotels';

mongoose.connect(URL);

const db= mongoose.connection;


db.on('connected',()=>{
    console.log("connected to mongodb server")
})

db.on('error',()=>{
    console.log("error while connecting to mongodb server")
})

db.on('disconnected',()=>{
    console.log("disconnected to mongodb server")
})


module.exports=db;