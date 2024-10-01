const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// // 置入 articles data.
// const articles = require("../data/articles");

// 置入 articles data json 檔案路徑
const articleJsonFilePath = path.join(
    __dirname,
    "../data/articles/articles.json"
);

// 文章列表
router.get('/', (req, res)=> {
    fs.readFile(
        articleJsonFilePath,
        (err, data) => {
            if (err) console.log('Error on reading articles.json: ',err);
            const articles = JSON.parse(data.toString());
            // 使用樣板
            res.render(
                "articles",
                { articles: articles }
            );
        }
    );
});

// 單篇文章
router.get('/:id', (req, res)=> {
    const id = req.params.id;

    fs.readFile(
        articleJsonFilePath,
        (err, data) => {
            if (err) console.log('Error on reading articles.json: ',err);
            const articles = JSON.parse(data.toString());
            
            // 使用樣板
            res.render("article", {
                article: articles[id],
                backUrl: '/articles',
                editUrl: `/articles/${id}/edit`,
                deleteMethod: `delete`,
                deleteUrl: `/api/articles/${id}`,
                js: ["article.js"]
            });
        }
    );
});

module.exports = router;