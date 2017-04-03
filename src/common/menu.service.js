(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var info = [];

  service.addInfo = function (myinfo) {
    info.push(myinfo);
    console.log('myinfo: ', myinfo );
    console.log("info : ", info);
  }

  service.getInfo = function () {
    return info;
  }

  service.getItem = function () {
    var item  = "";
    if(info.length > 0){
      item = info[0].favoriteDish;
    }
      return $http.get(ApiPath + '/menu_items/' + item + '.json' )
      .then(function (response) {
      
        return response.data;
      }, function () {
        console.log("Error");
      });
  }

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };



}



})();
