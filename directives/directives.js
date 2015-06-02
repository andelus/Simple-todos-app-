var customDirectives = angular.module('todoDirectives',[]);

customDirectives.directive('addTodo',function()
{
  return{
    restrict: "E",
    templateUrl:"views/components/addTodo.html"
  }
});

customDirectives.directive('todoList',function()
{
  return{
    restrict: "E",
    templateUrl:"views/components/todoList.html"
  }
});
