const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("index root");
    // no render?
});

module.exports = router;
