webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module("todoListApp", []);

	__webpack_require__(3);
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./scripts/directives/todoListApp.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module("todoListApp")

	.controller('mainCtrl', function($scope, dataService){

	  $scope.addTodo = function() {
	    var todo = {name: "This is a new Todo."};
	    $scope.todos.unshift(todo);
	  }

	  $scope.helloConsole = dataService.helloConsole;

	  dataService.getTodos(function(response) {
	    // console.log(response.data);
	    $scope.todos = response.data.todos;
	  });

	  $scope.deleteTodo = function(todo, $index) {
	    dataService.deleteTodo(todo);
	    $scope.todos.splice($index, 1);
	  };

	  $scope.saveTodos = function() {
	    var filteredTodos = $scope.todos.filter(function(todo) {
	      if (todo.edited) {
	        return todo;
	      };
	    });
	    dataService.saveTodos(filteredTodos);
	  };

	});

	module.exports = todoListApp;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(1);

	angular.module("todoListApp")

	.service('dataService', function($http) {
	  this.helloConsole = function() {
	    console.log("This is the hello console service!");
	  };

	  this.getTodos = function(callback) {
	    $http.get('api/todos')
	      .then(callback)
	  }

	  this.deleteTodo = function(todo) {
	    console.log("This " + todo.name + " is deleted!");
	  }

	  this.saveTodos = function(todos) {
	    console.log(todos.length + " todos saved!");
	  }
	});


	module.exports = dataService;


/***/ }
]);