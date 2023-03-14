var express = require('express');
const fs = require('fs');
const { emitWarning } = require('process');
var database = require('./database.json');

var app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public')); //visit localhost:3000/images/netflix.png for static files


app.get('/:id', (req, res) => {
  filePath = './database.json/';
  fs.readFile(filePath, function (err, data) {
    if (err) {
            throw err;
     }  

   
    var jsondata = JSON.parse(data);

     //JSON.parse()  - create an object to access properties with "." or DOT notation

     //JSON.stringify - creates useable JSON-formatted data that you can display from an object

     if(!jsondata.users[req.params.id]){

      res.status(404);
      res.send(404);
     }
     
     res.send(jsondata.users[req.params.id]);
   });
});

app.get('/', (req, res) => {
var data = {
  "username": "john"
}
res.render('home.ejs', {data});
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

     var usertoString = JSON.stringify(user.username);

     console.log(usertoString);

     res.send(`User ${usertoString} deleted.`);
    });
   });







app.listen(3000);
