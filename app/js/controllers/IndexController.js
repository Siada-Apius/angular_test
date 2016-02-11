app.controller('IndexController', ['$scope',
    function($scope) {

        var text_date_and_time = 'Date and Time of Incident';
        var text_reported = 'Reported By';
        var text_company_of_reporter = 'Company of Reporter';
        var text_contact_number = 'Contact Number';
        var text_supervisor = 'Supervisor Name';
        var text_description = 'High Level Description of Incident';
        var text_well = 'Well Number';
        var text_region = 'Region';
        var text_state = 'State';
        var text_office = 'Field Office';
        var text_severity = 'Incident Severity (Check all that Apply)';

        var required = 'This field is required';

        angular.forEach(data, function(value, key) {

            if(value.name == text_date_and_time) {
                $scope.date_and_time = value.values == required ? '' : value.values;
            }
            if(value.name == text_reported) {
                $scope.reported = value.values == required ? '' : value.values;
            }
            if(value.name == text_company_of_reporter) {
                $scope.company_of_reporter = value.values == required ? '' : value.values;
            }
            if(value.name == text_contact_number) {
                $scope.contact_number = value.values == required ? '' : value.values;
            }
            if(value.name == text_supervisor) {
                $scope.supervisor = value.values == required ? '' : value.values;
            }
            if(value.name == text_description) {
                $scope.description = value.values == required ? '' : value.values;
            }
            if(value.name == text_well) {
                $scope.well = value.values == required ? '' : value.values;
            }
            if(value.name == text_region) {
                $scope.region = value.values == required ? '' : value.values;
            }
            if(value.name == text_state) {
                $scope.state = value.values == required ? '' : value.values;
            }
            if(value.name == text_office) {
                $scope.office = value.values == required ? '' : value.values;
            }
            if(value.name == text_severity) {
                $scope.severity = value.values == required ? '' : value.values;
            }
        });

        $scope.inputChange = function () {

            data = [];

            if ($scope.date_and_time) {
                data.push({
                    name: text_date_and_time,
                    values: [$scope.date_and_time]
                });
            } else {
                data.push({
                    name: text_date_and_time,
                    values: required
                });
            }

            if ($scope.reported) {
                data.push({
                    name: text_reported,
                    values: [$scope.reported]
                });
            } else {
                data.push({
                    name: text_reported,
                    values: required
                });
            }

            if ($scope.company_of_reporter) {
                data.push({
                    name: text_company_of_reporter,
                    values: [$scope.company_of_reporter]
                });
            } else {
                data.push({
                    name: text_company_of_reporter,
                    values: required
                });
            }

            if ($scope.contact_number) {
                data.push({
                    name: text_contact_number,
                    values: [$scope.contact_number]
                });
            } else {
                data.push({
                    name: text_contact_number,
                    values: required
                });
            }

            if ($scope.supervisor) {
                data.push({
                    name: text_supervisor,
                    values: [$scope.supervisor]
                });
            } else {
                data.push({
                    name: text_supervisor,
                    values: required
                });
            }

            if ($scope.description) {
                data.push({
                    name: text_description,
                    values: [$scope.description]
                });
            } else {
                data.push({
                    name: text_description,
                    values: required
                });
            }

            if ($scope.well) {
                data.push({
                    name: text_well,
                    values: [$scope.well]
                });
            } else {
                data.push({
                    name: text_well,
                    values: required
                });
            }

            if ($scope.region) {
                data.push({
                    name: text_region,
                    values: [$scope.region]
                });
            } else {
                data.push({
                    name: text_region,
                    values: required
                });
            }

            if ($scope.state) {
                data.push({
                    name: text_state,
                    values: [$scope.state]
                });
            } else {
                data.push({
                    name: text_state,
                    values: required
                });
            }

            if ($scope.office) {
                data.push({
                    name: text_office,
                    values: [$scope.office]
                });
            } else {
                data.push({
                    name: text_office,
                    values: required
                });
            }

            if ($scope.severity) {
                if ($scope.severity.val7) {
                    alert(123);
                }

                data.push({
                    name: text_severity,
                    values: [$scope.severity]
                });
            } else {
                data.push({
                    name: text_severity,
                    values: required
                });
            }


            var well = $scope.well;
            if (well == 1) {
                $scope.region = 'South';
                $scope.state = 'Oklahoma';
                $scope.office = 'Ringwood';
            } else if (well == 2) {
                $scope.region = 'North';
                $scope.state = 'Montana';
                $scope.office = 'Sidney';
            } else if (well == 3) {
                $scope.region = 'North';
                $scope.state = 'North Dakota';
                $scope.office = 'Tioga';
            }

        };
    }
]);
