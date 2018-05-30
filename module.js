"use strict";


angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/edit-profile", {
        template: "<edit-profile><edit-profile>"
      })
      .when("/profile", {
        template: "<profile></profile>"
      })
      .otherwise({redirectTo: "/profile"});
  })