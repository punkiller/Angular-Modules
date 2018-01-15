(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.foodItems = "";
  $scope.msgStyle = {
        "color" : "green",
        "border-style" : "solid",
        "border-color" : "green"
      };

  $scope.click = function() {
    $scope.msg = "";
    var [foods, empty] = getFoods($scope.foodItems);
    if (foods == 0) {
      $scope.msg = "Please enter data first";
      $scope.msgStyle = {
            "color" : "red",
            "border-style" : "solid",
            "border-color" : "red"
          };
    } else if (foods <= 3) {
      $scope.msg = "Enjoy!";
    } else if (foods > 3) {
      $scope.msg = "Too much!";
    }
    if (empty > 0) {
      $scope.sidemsg = "Caution ! Empty items in menu, ignored !";
    }
  };

  function getFoods(str) {

    var arr = str.split(",");

    var foods = 0;
    var empty = 0;

    for(var i = 0; i < arr.length; i++) {
      if (arr[i].trim() == "") {
        empty++;
      } else {
        foods++;
      }
    }
    return [foods, empty];
  };

};
})();
