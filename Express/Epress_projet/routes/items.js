var express = require('express');

var router = express.Router();

// Dynamic routes by passing routing parameteres
// /items/details/89/hasnae
router.get("/details/:id/:name", (req, res) => {
    res.send("Hello World fom items details " + req.params.id + " " + req.params.name);
});

module.exports = router;