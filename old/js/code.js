/**
 * Created by Siada on 09.11.2015.
 */
//model
var model = {
    username: "Siada!!!!",
    courses: [
        { name: "lesson 1", passed: true },
        { name: "lesson 2", passed: false },
        { name: "lesson 3", passed: true }
    ]
};

//module
var courseListApp = angular.module('courseListApp', []);

//controller
courseListApp.controller('CourseListCtrl', function ($scope) {
    $scope.data = model;

    //click button
    $scope.addNew = function () {

        $scope.data.courses.push({
            name: $scope.courseName,
            passed: false
        });

        $scope.courseName = '';
    };

    $scope.setStyle = function (passed) {
        return passed ? 'color: green' : 'color: red';
    }

    $scope.showText = function (passed) {
        return passed ? 'yes' : 'no';
    }
});