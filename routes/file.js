const express = require("express");
const router = express.Router();

router.get('/getTxt', (req, res)=>{
    const absolutePath = path.join(__dirname, "/files/test.txt");
    res.sendFile(absolutePath, (err)=>{
        console.log(`Error on reading file...: `, err);
    });
});

router.get('/getHtml', (req, res)=>{
    const absolutePath = path.join(__dirname, "/files/html/test.html");
    res.sendFile(absolutePath, (err)=>{
        console.log(`Error on reading file...: `, err);
    });
});

router.get('/getImage', (req, res)=>{
    const absolutePath = path.join(__dirname, "/files/image/237-536x354.jpg");
    res.sendFile(absolutePath, (err)=>{
        console.log(`Error on reading file...: `, err);
    });
});


module.exports = router;