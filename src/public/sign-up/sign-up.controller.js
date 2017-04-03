(function() {
"use strict";

angular.module('public')
.controller("signUpController", signUpController);

signUpController.$inject = ['menuCategories', 'MenuService']
function signUpController(menuCategories, MenuService, $scope) {
  var signUp = this;
  signUp.saveInfoMsg = false;

  signUp.registration = {
    firstName: '', lastName: '', Email: '', phone: '', favoriteDish: ''
  }

  signUp.menu = menuCategories;

  signUp.submit = function () {

    MenuService.addInfo(signUp.registration);

    signUp.saveInfoMsg = true;
  }

}

})();
