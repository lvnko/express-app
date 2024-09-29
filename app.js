const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const exphbs = require("express-handlebars");

// 設定樣板引擎
app.engine('handlebars', exphbs.engine());
// 設定網站 預設執行樣版引擎的副檔名
app.set('view engine', 'handlebars');

// Logger

const logger = (req, res, next) => {

    const datetime = new Date();
    const timestamp = datetime.toString() + " " + req.originalUrl + "\n";

    console.log(`== Logger : logs ==`);
    console.log(`1. baseUrl : ${req.baseUrl}`);
    console.log(`2. url : ${req.url}`);
    console.log(`3. originalUrl : ${req.originalUrl}`);
    console.log(`4. hostname : ${req.hostname}`);
    console.log(`5. timestamp : ${timestamp}`);

    // 寫法一：較簡潔
    fs.writeFile(
        path.join(__dirname, "./log/log.txt"),
        timestamp,
        { flag: 'a+' },
        (err)=>{
            if (err) console.log('err :', err);
            next();
        }
    );

    // 寫法二：先讀取檔案，再寫入檔案
    // fs.readFile(
    //     path.join(__dirname, "./log/log.txt"),
    //     (err, data) => {
    //         if (err) console.log('err :', err);
            
    //         const newData = data ?
    //             data.toString() + "\n" + timestamp :
    //             timestamp;
            
    //         fs.writeFile(
    //             path.join(__dirname, "./log/log.txt"),
    //             newData,
    //             (err)=>{
    //                 if (err) console.log('err :', err);
    //                 next();
    //             }
    //         );
    //     }
    // );

};

const errorHandler = (err, req, res, next) => {
    console.log("err", err);
    console.log(err.name, ":", err.message);
    if (err)
        res.status(500).send(`<h1>There is an Error : ${err.message}</h1>`);
};


app.use(logger);


// 設定 Public Folder
app.use("/static", express.static('public'));

// 設定路由 route module
app.use("/", require("./routes"));

// Error Handler
app.use(errorHandler);

app.listen(3000, ()=> {
    console.log('Express app listen to port :3000.');
});