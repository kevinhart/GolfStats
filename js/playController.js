function playController($scope) {

    $scope.courses = [];

    $scope.loadData = function () {

        $scope.courses = 
        [
            { "id": "1", "name": "WildWood", "website": "http://www.golfwildwood.com" },
            { "id": "2", "name": "Clifton Springs", "website": "http://www.cliftonspringscountryclub.com/" }
        ];
        
    };

}