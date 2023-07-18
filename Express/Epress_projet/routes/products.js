var express = require('express');

const router = express.Router();

// Middleware
router.use("/", (req, res, next) => {
    // Check if data is JSON
    console.log("API call received");
    req.headers["content-type"] = "application/json";
    next();
});

router.get("/", (req, res, next) => {
    // Send response
    res.send("Get Request for Products");
    console.log("Headers Received: " + req.headers["content-type"]);
    next();
});

router.use("/", (req, res) => {
    console.log("API call ended");
});

module.exports = router;