const express = require("express");
const app = express();

app.get('/', (req, res)=> {
    res.send('Hello Would!!!');
});

app.get('/articles', (req, res)=> {
    res.send(`<p>Adipisicing voluptate excepteur dolor consectetur tempor id velit ad aute deserunt id. Nulla enim elit est ea do aliquip reprehenderit cupidatat id et sit ex esse. Anim labore et cillum non. Et minim dolore non est exercitation ipsum occaecat elit ullamco ex nostrud do voluptate.</p>
<p>Et proident deserunt labore pariatur id dolor aliqua officia aliquip occaecat veniam nulla. Ex cillum culpa pariatur tempor irure laborum deserunt minim velit amet. Incididunt qui deserunt amet exercitation in dolor excepteur dolor nulla. Ipsum voluptate ut exercitation ex incididunt proident adipisicing. Reprehenderit non minim cillum incididunt Lorem aliqua ut ullamco incididunt culpa ipsum. Eu qui cillum velit esse minim. Velit in mollit excepteur deserunt labore officia enim Lorem elit mollit.</p>
<p>Voluptate dolor quis voluptate eu officia est cupidatat do nisi duis. Sit consequat ut deserunt commodo consectetur eu amet adipisicing non amet. Esse reprehenderit cillum nisi aliqua exercitation laboris qui nulla. Duis anim aliqua nisi tempor ad commodo nostrud incididunt incididunt. Do eiusmod ipsum velit et cillum culpa cillum. Eu ea anim sit occaecat. Nulla id in reprehenderit proident est incididunt consectetur aliquip.</p>`);
});

app.get('/*', (req, res)=> {
    res.send('Nothing Found!');
});

app.listen(3000, ()=> {
    console.log('Express app listen to port :3000.');
});