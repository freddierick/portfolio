const express = require('express')
const app = express()
const port = 80
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
const projects = require("./projects.json")

app.get('/', (req, res) => {
  res.render('index',{
      projects
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
