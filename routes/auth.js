const express = require("express");
const router = express.Router();

router.get('/login', (req, res)=> {

    // console.log(`== Logger : Router: auth ==`);
    // console.log(`1. baseUrl : ${req.baseUrl}`);
    // console.log(`2. url : ${req.url}`);
    // console.log(`3. originalUrl : ${req.originalUrl}`);
    // console.log(`4. hostname : ${req.hostname}`);

    res.render("login");
});

module.exports = router;