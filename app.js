var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(process.env.PORT || 5000);

// make our app available to other Node.js modules
module.exports = app;