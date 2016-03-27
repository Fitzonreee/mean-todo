'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database');
require('./seed');

app.use('/', express.static('client'));
app.use(parser.json());

app.use('/api', router);

app.listen(3000, function() {
  console.log("Up and running on port 3000...");
})

// nodemon src/app.js
// iron-node src/app.js
