app.controller('ReviewController', ['$scope',
    function($scope) {

        $scope.all_data = data;
        //

        angular.forEach(true_table_data, function(value, key) {
            angular.forEach(value, function(v, k) {
                //console.log(v);
                $scope.all_data.push(v);
            });
        });
    }
]);
