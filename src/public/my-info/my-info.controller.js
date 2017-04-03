(function() {
"use strict";

angular.module('public')
.controller("myInfoController", myInfoController);

myInfoController.$inject = ['MenuService', 'ApiPath']
function myInfoController( MenuService, ApiPath) {
  var myInfo = this;
  myInfo.title = "Registered Information";

  myInfo.basePath = ApiPath;
  myInfo.allInfo = [];
  myInfo.allInfo = MenuService.getInfo();

  myInfo.item = [];
  myInfo.item = MenuService.getItem().then(function (response) {
    
    myInfo.item = response;
  });

}

})();
