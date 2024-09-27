const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");

// 設定樣板引擎
app.engine('handlebars', exphbs.engine());
// 設定網站 預設執行樣版引擎的副檔名
app.set('view engine', 'handlebars');

// 設定 Public Folder
app.use("/static", express.static('public'));

// 根路由
app.get('/', (req, res)=> {
    res.render("home");
});

// 回傳文字訊息 or HTML tag
app.get('/articles', (req, res)=> {
    res.render("articles");
});

app.get('/about', (req, res)=> {
    res.render("about");
});

app.get('/txt', (req, res)=>{
    const absolutePath = path.join(__dirname, "/files/test.txt");
    res.sendFile(absolutePath, (err)=>{
        console.log(`Error on reading file...: `, err);
    });
});

app.get('/getHtml', (req, res)=>{
    const absolutePath = path.join(__dirname, "/files/html/test.html");
    res.sendFile(absolutePath, (err)=>{
        console.log(`Error on reading file...: `, err);
    });
});

app.get('/getImage', (req, res)=>{
    const absolutePath = path.join(__dirname, "/files/image/237-536x354.jpg");
    res.sendFile(absolutePath, (err)=>{
        console.log(`Error on reading file...: `, err);
    });
});

app.get('/*', (req, res)=> {
    res.send('Nothing Found!');
});

app.listen(3000, ()=> {
    console.log('Express app listen to port :3000.');
});