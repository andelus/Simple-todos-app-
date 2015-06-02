var todoApp = angular.module('todoApp', ['ngRoute','todoControllers','todoDirectives']);

todoApp.config(['$routeProvider',function($routeProvider){
      //Defining our app routing
      $routeProvider
        .when('/',
              {
                templateUrl:'views/todos.html',
                controller:'showAllTodos'
              });
}]);
