// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

let datas = ["Đi chợ","Nấu cơm","Rửa bát","Học code tại CodersX"]
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});


app.get("/todos", (req, res) => {
  let q = req.query.q;
  if(q){
    let filterData = datas.filter(item => item.toLowerCase().includes(q.toLowerCase()) === true);
    res.render('index', { datas: filterData }); 
  }
   res.render('index', { datas }); 
});

app.get("/todos/create", (req, res) => {
  res.render('index', { datas }); 
});

app.post("/todos/create", (req, res) => {
  datas.push(req.body);
  res.redirect('back')
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
