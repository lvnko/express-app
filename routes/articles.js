const express = require("express");
const router = express.Router();

// 置入 articles data.
const articles = require("../data/articles");

// 單篇文章
router.get('/:id', (req, res)=> {
    const id = req.params.id;
    res.render("article", {
        article: articles[id],
        backUrl: '/articles'
    });
});

// 文章列表
router.get('/', (req, res)=> {
    res.render("articles", { articles: articles });
});

module.exports = router;