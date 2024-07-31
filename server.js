const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile("pages/index.html", {root: __dirname});
})

app.get('/search', (req, res) => {
  res.sendFile("pages/search.html", {root: __dirname});
})

app.get('/browse', (req, res) => {
  res.sendFile("pages/browse.html", {root: __dirname});
})

app.get('/about', (req, res) => {
  res.sendFile("pages/about.html", {root: __dirname});
})

app.get('/book', (req, res) => {
  res.sendFile("pages/book.html", {root: __dirname});
})


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})