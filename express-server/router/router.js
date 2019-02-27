var express = require('express');

// get an instance of express router
const router = express.Router()
var myDataModel = require("../models/manage-records");

//router.get('/getAllRecords',recors.getAllRecords);

router.get('/getAllRecords',(req,res)=>{
    let records;
    myDataModel.find({},function(err,response){
        records=response;
        res.json(records);
    });
    
  
})

/**
 * yet to be developed
 * 
 */
router.get('/createRecord',(data)=>{
    console.log(data);
 myDataModel.insert(data,function(err,response){
        res.send(response);
    });
    

})

module.exports= router;