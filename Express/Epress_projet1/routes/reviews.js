var express = require('express');

var router = express.Router();

//  /reviews
router.get("/",(req,res)=>{
    res.send("Hello World fom reviews routes");
});

// /reviews/details
router.get("/details",(req,res)=>{
    res.send("Hello World fom reviews details routes");
});


module.exports = router;
