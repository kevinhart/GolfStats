function NavigationController($scope){

	$scope.visible = false;

	$scope.toggleVisible = function () {
	    $scope.visible = !$scope.visible;
	};
};