const express = require("express"); 
const router = express.Router();

const person = require('../models/person');
//bodyparser
const bodyParser = require("body-parser");
router.use(bodyParser.json())


router.post('/',async function(req,res){
    try {
        const data = req.body;
        const newperson1 = new person(data);
        const response = await newperson1.save();
        console.log('data saved succesfully')
        res.status(200).json(response);
   
    } catch (err) {
        console.log(err)
        res.status(500).json(response)
    }
})
//buibdubvdfubdubvsibaibdfib bcebcuebbihbvibvjwcdsvcsyuv

router.get('/', async function(req,res){
     try {
        const a = await person.find();
        console.log("data fetchd");
        res.status(500).json(a);


     } catch (error) {
        console.log(error)
     }  
    
})

module.exports= router;