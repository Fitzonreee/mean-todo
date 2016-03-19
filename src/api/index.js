'use strict';

var express = require('express');
var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function(req, res) {
  res.json({todos: todos});
});

// TODO: Add POST route to create new entries

// TODO: ADD PUT route to update existing entries

// TODO: Add DELETE route to delete entries

module.exports = router;
