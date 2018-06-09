var proxy = require('express-http-proxy');
var express = require('express');
var app = express();

app.use('/data', express.static('data'));
app.use('/', express.static('src'));

console.log("Listening on port 3030");
app.listen(3030);