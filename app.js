var express = require('express');
var database = require('./database.js');

var app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/all', (req, res) => {
  res.send(database);
});

app.get('/', (req, res) => {
res.render('home.ejs');
});


app.post('/:id', (req, res) => {
  res.send(database);
});

app.get('/:first_name', function(req, res){
  if(!database.find(database => database.first_name  == req.params.first_name)){
    res.status(404);
    res.render('index.ejs');
  } else {
  res.send(database.find(database => database.first_name == req.params.first_name));
  }
});



app.listen(3000);
