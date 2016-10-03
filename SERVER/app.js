var express = require('express');
var app = express();
var server = require('http').createServer(app);
server.listen(3000);

app.get('/',function (req,res) {
  // res.send("<font color=red>HELLO</font>")
  res.sendFile(__dirname + "/index.html")
});


app.get('/home.aspx',function (req,res) {
  res.send("This is HOME.ASPX")
});

app.get('/total/:number1/:number2',function (req,res) {
  var number1 = req.params.number1;
  number1 = parseInt(number1);
  var number2 = req.params.number2;
  number2 = parseInt(number2);
  var total = number1 + number2 ;
  res.send("<h1>"+ total +"</h1>")
});
