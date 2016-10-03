var buffer = new Buffer('Hello','utf-8');
var buffer2 = new Buffer('Minh Chiến','utf-8')
console.log(buffer);
// buffer --> String
console.log(buffer.toString());
// buffer --> JSON
console.log(buffer.toJSON());
console.log('=============================');
console.log(buffer2);
console.log(buffer2.toString());
// buffer --> JSON
console.log(buffer2.toJSON());
