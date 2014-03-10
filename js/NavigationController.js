function NavigationController($scope){

	$scope.navVisible = false;
	$scope.navTarget = "home";
	
	$scope.toggleVisible = function () {
	
	    $scope.navVisible = !$scope.navVisible;
	};
	
	$scope.isTarget = function(t)
	{
		return $scope.navTarget === t;
	};
	
	$scope.navClick = function(n)
	{
		$scope.navTarget = n;
		$scope.navVisible = false;
	};

};