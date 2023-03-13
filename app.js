var express = require('express');
const fs = require('fs');
const { emitWarning } = require('process');
var database = require('./database.json');

var app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/all', (req, res) => {
  filePath = './database.json/';
  fs.readFile(filePath, function (err, data) {
    if (err) {
            throw err;
     }  
     var jsondata = JSON.parse(data);
     
     res.send(jsondata.users);
   });
});

app.get('/', (req, res) => {
res.render('home.ejs');
});


app.delete('/delete/:id', (req, res) => {
  filePath = './database.json/';
  fs.readFile(filePath, function (err, data) {
    if (err) {
            throw err;
     }  
     var jsondata = JSON.parse(data);
     
     var user = jsondata.users[req.params.id];

     delete user;

     var usertoString = JSON.stringify(user);

     console.log(usertoString);

     res.send(`User ${usertoString} deleted.`);
    });
   });







app.listen(3000);
