var editController = angular.module('editController',[]);
editController.controller('editctrl',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
	
	$http.get('/getData/' + $routeParams.id).success(function(response){
		console.log("get data from edit"+$routeParams.id);
             $scope.employee=response;
    });
		 
	 $scope.update = function(){
        console.log("inside update:"+$scope.employee._id);
         $http.put('/update/' + $scope.employee._id,$scope.employee).success(function(response){
             console.log("Inside Update Function"+$scope.employee+"id :"+$scope.employee._id);
             console.log(response);
         });
		  $location.url('/getData');
    };
    
}]);