
const express = require("express");
const db = require ('./db');
const app=express();
const personroutes = require("./Routes/personroutes");
const person = require('./models/person');



app.use('/person',personroutes);
