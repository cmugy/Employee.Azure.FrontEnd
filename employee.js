
var app= angular.module("EmployeeApp", []).controller('EmployeeController', function ($scope, $http) {
   $http.get('http://employeewebapiazure20180822105822.azurewebsites.net/api/employees').then(function(response){
       $scope.employees= response.data;
   });

    $scope.incrementSalary=function i(employee){
        employee.salary = employee.salary + 1000;
    }

    $scope.decrementSalary=  function (employee){
        employee.salary = employee.salary - 1000;
    }
});

