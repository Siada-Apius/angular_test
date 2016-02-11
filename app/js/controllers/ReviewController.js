app.controller('ReviewController', ['$scope',
    function($scope) {

        $scope.all_data = data;
        //

        angular.forEach(true_table_data, function(value, key) {
            angular.forEach(true_table_data, function(v, k) {
                console.log(v);
            });
        });
        //for(var i = 0; i < true_table_data.length; i++) {
        //    for(var j = 0; j < true_table_data[i].length; j++) {
        //        $scope.all_data.push(true_table_data[i][j]);
        //    }
        //}
    }
]);
