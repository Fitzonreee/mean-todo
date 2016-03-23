webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module("todoListApp", []);

	__webpack_require__(3);


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

	})


/***/ }
]);