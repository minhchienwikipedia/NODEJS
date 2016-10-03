var fs = require("fs");
var content = fs.readFileSync(__dirname + "/content.txt");

console.log(content);


console.log(content.toString());
