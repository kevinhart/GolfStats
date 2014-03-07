function NavigationController($scope){

	$scope.visible = 'true';

	$scope.toggleVisible = function(){
			$scope.visible = !$scope.visible;
	};
};