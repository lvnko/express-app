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

// 設定路由 route module
app.use("/", require("./routes"));

app.listen(3000, ()=> {
    console.log('Express app listen to port :3000.');
});