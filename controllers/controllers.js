var todoControllers = angular.module('todoControllers',[]);

todoControllers.controller('showAllTodos',function($scope)
  {
    $scope.todos = [{"title":"First Todo","done":false}];

    $scope.addTodo = function(){
      $scope.todos.push({"title":$scope.newTask,"done":false});
      $scope.newTask="";
    }

    $scope.clearDone = function(){
      $scope.todos = $scope.todos.filter(function(task){
        return !task.done;
      });
    }
  }
);
