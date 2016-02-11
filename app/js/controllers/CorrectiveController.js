app.controller('CorrectiveController', ['$scope',
    function($scope) {


        //
        if (true_table_data != '') {
            $scope.table_data = true_table_data;
        } else {
            $scope.table_data = [];
        }

        var i = 1;
        $scope.addNew = function () {

            $scope.one = [];
            $scope.one.push({
                name: 'Description of Corrective Action ('+ i +')',
                values: $scope.descriptionAction
            });
            $scope.one.push({
                name: 'Action Taken By (name) ('+ i +')',
                values: $scope.name_action
            });
            $scope.one.push({
                name: 'Company ('+ i +')',
                values: $scope.company
            });
            $scope.one.push({
                name: 'Date ('+ i +')',
                values: $scope.date
            });
            $scope.table_data.push($scope.one);
            true_table_data.push($scope.one);


            $scope.descriptionAction = '';
            $scope.name_action = '';
            $scope.company = '';
            $scope.date = '';

            i++;
        };

        $scope.removeRow = function (index) {
            $scope.table_data.splice(index, 1);
        };



        $scope.edit = function(index){
            $scope.editingData = $scope.table_data[index];
            $scope.editingData.row = index;
        };


        $scope.update = function(index){

            true_table_data[index] = [];
            for(var i = 0; i < $scope.editingData.length; i++) {

                true_table_data[index].push($scope.editingData[i]);
            }

            console.log(true_table_data);
            $scope.editingData = false;
        };
    }
]);
