const express = require('express');
const blog = require('./Routes/blog');

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use('/blog' , blog)

app.get('/', (req, res) => {
    console.log('Hey its a get request')
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    console.log('Hey its a post request')
    res.send('Hey this is post request')
})

app.get("/index", (req, res) => {
    console.log('Hey its a index.html file')
    res.sendFile('template/index.html', {root : __dirname})
})

app.get("/api", (req, res) => {
    res.json({a : 1 , b : 2 , c : 3})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});