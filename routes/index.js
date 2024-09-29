const express = require("express");
const router = express.Router();

// 根路由
router.get('/', (req, res)=> {
    res.render("home");
});

router.get('/about', (req, res)=> {
    res.render("about");
});

// 使用 articles router
router.use('/articles', require("./articles"));

// 使用 file router
router.use('/file', require("./file"));

// 使用 auth router
router.use('/auth', require("./auth"));

router.get('/*', (req, res)=> {
    res.send('Nothing Found!');
});

module.exports = router;