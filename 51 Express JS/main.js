const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.static('files'));

app.get('/', (req, res) => {
  res.send('Hey ! Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact Me')
})

app.get('/Blog', (req, res) => {
  res.send('Hello Blog')
})

app.get('/Blog/intro-to-js', (req, res) => {
  res.send('Hello intro-to-js')
})

app.get('/blog/:slug' , (req , res) =>{
  console.log(req.params)
  console.log(req.query)
  res.send(`Hello ${req.params.slug}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});