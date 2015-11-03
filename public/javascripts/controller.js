
var app=angular.module('myapp',[]);
app.controller('simpController',function($scope,$http){
   $http.get('/newProject').success(function(data){
	   console.log("New arrived data is :"+data);
   $scope.customer=data;
    console.log("New arrived scope is :"+$scope.customer);
    }).error(function(err){
	console.log(err);
	$scope.customer="Error "+err;
	});
});
