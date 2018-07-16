var restaurantApp = angular.module("restaurantApp", []);
restaurantApp.controller("restaurantCotroller",restaurantFunc);
function restaurantFunc($scope,$http){
	$scope.catgry = [];
	$scope.chinesecombo = [];
	$scope.chinesestarter = [];
	$scope.salad = [];
	$scope.oriental = [];

	$http.get("https://thesmartq.firebaseio.com/menu.json")
    .then(function(response) {
		$scope.restaurantMenu = response.data;
		//console.log($scope.restaurantMenu.length);
		//console.log(response);
		//console.log(response.data.length);
		var m = 0;
		for (var i=0; i<response.data.length; i++){
			//console.log(response.data[i].category);
			if($scope.catgry.indexOf(response.data[i].category) == -1){
				$scope.catgry.push(response.data[i].category);
				//$scope.catgryitems[m++][0] = response.data[i].category;
				//$scope.catgryitems.push(response.data[i].category);
			}				
		}
		console.log($scope.catgryitems);
		for (var i=0; i<response.data.length; i++){
			//var tmp = $scope.catgry.indexOf();
			if(response.data[i].category === 'Chinese Combos'){
				$scope.chinesecombo.push(response.data[i]);
			}
			else if(response.data[i].category === 'Chinese Starter'){
				$scope.chinesestarter.push(response.data[i]);
			}
			else if(response.data[i].category === 'Salads'){
				$scope.salad.push(response.data[i]);
			}
			else{
				$scope.oriental.push(response.data[i]);
			}
		}
		
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
