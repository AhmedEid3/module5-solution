(function() {
"use strict";

angular.module('public')
.controller("signUpController", signUpController);

signUpController.$inject = ['menuCategories', 'MenuService']
function signUpController(menuCategories, MenuService) {
  var signUp = this;

  signUp.registration = {
    firstName: '', lastName: '', Email: '', phone: '', favoriteDish: 'A'
  }

  signUp.menu = menuCategories;

  signUp.submit = function () {
    console.log("submit");
    MenuService.addInfo(signUp.registration);
  }

}

})();
