var mysql = require('mysql');
var express = require('express');
var app = express();
var connection = mysql.createConnection({
  host: 'mysql.hostinger.vn',
  user: 'u138721054_root',
  password: '123456789',
  database: 'u138721054_data'
});
connection.connect(function(error) {
  if(!!error){
    console.log('Error' + error);
  }else {
    console.log('Connected');
  }
});
app.get('/',function (req,res) {
  connection.query('SELECT * FROM tbl_user', function (error,result){
  console.log(result);
  res.json(result);
});
});
app.listen(1337);
