'use strict';

var express = require('express');
var router = require('./api');

var app = express();

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3000, function() {
  console.log("Up and running on port 3000...");
})

// nodemon src/app.js
