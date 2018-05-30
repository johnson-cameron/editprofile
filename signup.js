"use strict";

const editProfile = {
  template:`
  <form ng-submit="$ctrl.signUp($ctrl.user);">
    <h3>Use the form below to update your profile.</h3>
    <h4>Name</h4>
    <input type"text" ng-model="$ctrl.user.name">
    <h4>Contact</h4>
    <input type"text" ng-model="$ctrl.user.email">
    <h4>Bio</h4>
    <textarea ng-model="$ctrl.user.bio" cols="30" rows="10"></textarea>
    <button>Update</button>
  </form>
  `,
  controller: ["ProfileService", function(ProfileService) {
    const vm = this;
    vm.user = angular.copy(ProfileService.getUserProfile());
    vm.signUp = (user) => {
      ProfileService.setUserProfile(user);
    };
  }]

};

angular
  .module("app")
  .component("editProfile", editProfile)