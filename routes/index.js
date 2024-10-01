const express = require("express");
const router = express.Router();


const validateUser = (user) => {
    console.log(`== routes : authenticator : validateUser ==`);
    console.log('user :', user, "\n");
    // 將會置入驗證使用者身份的邏輯
    return true;
};

const authenticator = (req, res, next) => {
    // 驗證使用者身份
    if (validateUser(req.user)) {
        next();
    } else {
        res.redirect("/");
    }

};

// 根路由
router.get('/', (req, res)=> {
    res.render("home");
});

router.get('/about', (req, res)=> {
    // throw new Error("Somethig's wrong!");
    res.render("about");
});

// 使用 articles router
router.use('/articles', authenticator, require("./articles"));

// 使用 file router
router.use('/file', require("./file"));

// 使用 auth router
router.use('/auth', require("./auth"));

// 使用 api router
router.use('/api', require("./api"));

router.get('/*', (req, res)=> {
    res.send('Nothing Found!');
});

module.exports = router;