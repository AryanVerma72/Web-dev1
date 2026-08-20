const express = require('express');
const app = express()
const port = 3000


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search now"
    let arr = [3,23,52]
  res.render("index" , {siteName : siteName , searchText : searchText , arr: arr
  })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas when and why ?"
    let blogContent = "It is very Good Brand"
  res.render("blogPost" , {blogTitle : blogTitle, blogContent : blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})