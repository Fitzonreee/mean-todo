'use strict';

var express = require('express');
var Todo = require('../models/todo');
// var todos = require('../../mock/todos.json');

var router = express.Router();

// get all todos
router.get('/todos', function(req, res) {
  Todo.find({}, function(err, todos) {
    if (err) {
      // do something
      return res.status(500).json({message: err.message});
    }
    res.json({todos: todos});
  });
});

// Add a new todo
router.post('/todos', function(req, res) {
  var todo = req.body;
  Todo.create(todo, function(err, todo) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo created.'});
  });
});

// TODO: ADD PUT route to update existing entries

// TODO: Add DELETE route to delete entries

module.exports = router;
