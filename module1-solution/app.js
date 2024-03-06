(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
        $scope.dishes = "";

        $scope.check = function () {
            let content = $scope.dishes;
            if (content === "") {
                $scope.result = "Please enter data first";
                return;
            }

            let dishes = content.split(',').filter(dish => dish.trim() !== "");
            if (dishes.length < 4)
                $scope.result = "Enjoy!";
            else
                $scope.result = "Too much!";
        }
    }
})();
