const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// 置入 articles data json 檔案路徑
const articleJsonFilePath = path.join(
    __dirname,
    "../../data/articles/articles.json"
);

router.get("/", (req, res) => {
    fs.readFile(
        articleJsonFilePath,
        (err, data) => {
            if (err) console.log('Error on reading articles.json: ',err);
            const articles = JSON.parse(data.toString());

            // 回傳 json 訊息
            return res.send({
                statusText: "ok",
                articles: articles
            });
        }
    );
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile(
        articleJsonFilePath,
        (err, data) => {
            if (err) console.log('Error on reading articles.json: ',err);
            const articles = JSON.parse(data.toString());

            // 回傳 json 訊息
            return res.send({
                statusText: "ok",
                article: articles[id]
            });
        }
    );
});

// 新增文章
router.post("/", (req, res) => {
    const { title, subTitle, content } = req.body;

    // 檢查必備資訊 title
    if (!title) {
        return res.send({
            statusText: "fail",
            message: "Failed to post article, title is required!"
        });
    }
    fs.readFile(
        articleJsonFilePath,
        (err, data) => {
            if (err) console.log('Error on reading articles.json: ',err);
            const articles = JSON.parse(data.toString());
            articles.push({
                id: articles.length,
                title: title || "",
                subTitle: subTitle || "",
                createdDate: new Date().toString(),
                content: content || "",
                image: `/static/image/article-img-${articles.length}.jpg`,
                url: `/articles/${articles.length}`,
                publish: true
            });
            const newData = JSON.stringify(articles, null, 4);
            fs.writeFile(
                articleJsonFilePath,
                newData,
                (err) => {
                    if (err) console.log('Error on writing at articles.json: ', err);

                    // 回傳 json 訊息
                    res.send({
                        statusText: "ok",
                        message: "Article posting succeeded!!"
                    });
                }
            );
        }
    );
});

// 修改文章
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const { title, subTitle, content } = req.body;
    fs.readFile(
        articleJsonFilePath,
        (err, data) => {
            if (err) console.log('Error on reading articles.json: ',err);
            
            let articles = JSON.parse(data.toString());
            articles[id] = {
                ...articles[id],
                title: title || "",
                subTitle: subTitle || "",
                updatedDate: new Date().toString(),
                content: content || "",
            };

            const newData = JSON.stringify(articles, null, 4);
            fs.writeFile(
                articleJsonFilePath,
                newData,
                (err) => {
                    if (err) console.log('Error on writing at articles.json: ', err);

                    // 回傳 json 訊息
                    res.send({
                        statusText: "ok",
                        message: "Article update succeeded!!"
                    });
                }
            );
        }
    );
});

// 刪除文章
router.delete("/:id", (req, res) => {
    const index = parseInt(req.params.id);

    return fs.readFile(
        articleJsonFilePath,
        (err, data) => {
            if (err) console.log('Error on reading articles.json: ',err);
            let articles = JSON.parse(data.toString());
            if (
                index > -1 &&
                index < articles.length &&
                articles[index] !== undefined
            ) {
                articles[index] = {
                    ...articles[index],
                    publish: false,
                    delete: true,
                    deletedDate: new Date().toString()
                };
                const newData = JSON.stringify(articles, null, 4);
                return fs.writeFile(
                    articleJsonFilePath,
                    newData,
                    (err) => {
                        if (err) console.log('Error on writing at articles.json: ', err);
                        // 回傳 json 訊息
                        res.send({
                            statusText: "ok",
                            message: "Article is deleted!"
                        });
                    }
                );
                
            }
            return res.send({
                statusText: "fail",
                message: "Failed to delete an article that doesn't exist!"
            });

        }
    );
});

module.exports = router;