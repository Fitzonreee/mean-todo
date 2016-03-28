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

// Update existing entries
router.put('/todos/:id', function(req, res) {
  var id = req.params.id;
  var todo = req.body;
  if (todo && todo._id !== id) {
    return res.status(500).json({err: "Ids don't match!"});
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo updated.'});
  });
});

// TODO: Add DELETE route to delete entries
// No idea if this is working!!!
router.get('/todos/:id', function(req, res) {
  var id = req.params.id;
  var todo = req.body;
  if (todo && todo._id !== id) {
    return res.status(500).json({err: "Ids don't match!"});
  }
  Todo.destroy(id, todo, function(err, todo) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo deleted.'});
  });
});


module.exports = router;
