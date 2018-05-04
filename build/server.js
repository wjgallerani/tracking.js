
const http = require('http');
const fs = require('fs');
const contents = fs.readFileSync('index.html');

http.createServer(function(req, res) {
 //res.end('DevPleno.com');
 res.end(contents);
}).listen(3000);
