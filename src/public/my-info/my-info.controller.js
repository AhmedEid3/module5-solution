(function() {
"use strict";

angular.module('public')
.controller("myInfoController", myInfoController);

myInfoController.$inject = ['MenuService']
function myInfoController( MenuService) {
  var myInfo = this;
  myInfo.title = "Registered Information";
  myInfo.allInfo = [];
  myInfo.allInfo = MenuService.getInfo();
}

})();
