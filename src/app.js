'use strict';

var express = require('express');
var router = require('./api');

var app = express();

require('./database');

app.use('/', express.static('client'));

app.use('/api', router);

app.listen(3000, function() {
  console.log("Up and running on port 3000...");
})

// nodemon src/app.js
