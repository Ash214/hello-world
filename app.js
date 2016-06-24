var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World app!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:123456@localhost:5432/ToDoList");

var dateAdded='2001-01-01'

db.one('SELECT * FROM public."ToDoList" where dateAdded=$1', values : [dateAdded] , 123)
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
	
app.get('/', function (req, res) {
  res.send('Hello World close!');
});