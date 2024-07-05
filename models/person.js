const mongoose = require('mongoose');

const personschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    phone:{
        type:String,
        required:true,
        
    }
});

const person = mongoose.model('person',personschema);

module.exports = person;