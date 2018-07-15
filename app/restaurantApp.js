var restaurantApp = angular.module("restaurantApp", []);
restaurantApp.controller("restaurantCotroller",restaurantFunc);
function restaurantFunc($scope,$http){

	$http.get("https://thesmartq.firebaseio.com/menu.json")
    .then(function(response) {
        $scope.restaurantMenu = response.data;
    });
	
	
	
	$scope.vegflag = function(flag){
		if(flag=="nonveg")
			return "../images/1.jpg";
		else return "../images/2.jpg";
	};
	
	$scope.description = function(des){
		if(des != "")
			return "Description: "+des;
	}
	 
}
