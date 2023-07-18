var express = require('express');
var users = require('./routes/users');
var products = require('./routes/products');
var items = require('./routes/items');
var orders = require('./routes/orders');
var reviews = require('./routes/reviews');

var app = express();

var  mongoose = require('mongoose');


var dbURL = require("./properties").DB_URL;
mongoose.connect(dbURL);

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB using MongooseJS");
});





app.use("/users",users);
app.use("/products",products);
app.use("/items",items);
app.use("/orders",orders);
app.use("/reviews",reviews);


app.get("/userGet",(req,res)=>{
    res.send("Hello World");
});

app.get("/testGet", (req,res)=>{
    var testObj = {
        Id: 10,
        Name: "Express Course",
        active: true
    }
    res.send(testObj);
});

// Wild Card Routes
app.get("*", (req, res) => {
    var resObject = {
        StatusCode: 404,
        StatusMessage: "Error not found"
    }
    res.send(resObject);
});


app.listen(4000);