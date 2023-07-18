var express = require('express');

var router = express.Router();

//  /orders
router.get("/",(req,res)=>{
    res.send("Hello World fom orders routes");
});


// /orders/details
router.get("/details",(req,res)=>{
    res.send("Hello World fom orders details routes");
});

module.exports = router;