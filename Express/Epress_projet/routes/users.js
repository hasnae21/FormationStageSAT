var express = require('express');
var router = express.Router();

// URL Building using Regex
router.get("/users-id/:key([0-9]{4})", (req, res) => {
    res.send("Hello World its users id " + req.params.key);
});
router.get("/users-name/:key([a-zA-Z]{4})", (req, res) => {
    res.send("Hello World its users name " + req.params.key);
});

// Wild Card Routes
router.get("*", (req, res) => {
    var resObject = {
        StatusCode: 404,
        StatusMessage: "Error not found"
    }
    res.send(resObject);
});

module.exports = router;