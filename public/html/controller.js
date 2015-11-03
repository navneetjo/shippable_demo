var myApp = angular.module('myApp',['ngRoute','editController']);
myApp.controller('homectrl',['$scope','$http','$location',function($scope,$http,$location){
    console.log("hello world from controller");
    
    $http.get('/getData').success(function(response){
        $scope.employee1 = response; 
		console.log("inside get "+$scope.employee1);
    }).error(function(err){console.log("error" +err)});
    
      $scope.add= function(){
		  console.log("details are :"+$scope.emp);
       $http.post('/postData',$scope.emp).success(function(response){
            console.log(response);
			console.log("hello");
        }).error(function(err){console.log(err)});
		console.log("getting error");
        $location.url('/getData');
    };
    

     $scope.remove = function(id){
		 console.log("want to delete you"+id);
		 $http.delete('/delete/' + id).success(function(response){
				console.log(response);
		 });
		 $http.get('/getData').success(function(response){
			$scope.employee1 = response; 
		});
	 };

	 $scope.edit = function(id){
		 console.log("inside edit function");
         $location.url('/update/'+id);
     };
    $scope.goToAdd = function()
    {
        $location.url('/postData');
    }
    $scope.goToList = function()
    {
        $location.url('/getData');
    }
    
}]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'home.html',
        controller: 'homectrl'
      }).
      when('/postData', {
        templateUrl: 'postData.html',
        controller: 'homectrl'
      }).
      when('/getData', {
        templateUrl: 'getData.html',
        controller: 'homectrl'
      }). 
	  when('/update/:id', {
        templateUrl: 'edit.html',
        controller: 'editctrl'
      }). 
      otherwise({
        redirectTo: '/home'
      });
  }]);