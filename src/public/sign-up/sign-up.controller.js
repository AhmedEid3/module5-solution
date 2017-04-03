(function() {
"use strict";

angular.module('public')
.controller("signUpController", signUpController);

signUpController.$inject = ['menuCategories']
function signUpController(menuCategories) {
  var signUp = this;

  signUp.registration = {
    firstName: '', lastName: '', Email: '', phone: '', favoriteDish: 'A'
  }

  signUp.menu = menuCategories;

}

})();
