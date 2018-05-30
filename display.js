"use strict";

const profile = {
  template:`
  <div>
    <section><img src="grant.png" alt="grant chirpus"></section>
    <h2 class="bio">{{ $ctrl.userData.name }}</h2>
    <p id="email" class="bio">{{ $ctrl.userData.email }}</p>
    <p id="bio" class="bio">{{ $ctrl.userData.bio }}</p>
    <button ng-click="$ctrl.toEdit();">Edit</button>
  </div>
  `,
  controller: ["ProfileService", function(ProfileService){
    const vm = this;
    vm.userData = ProfileService.getUserProfile();
    vm.toEdit = () => {
      ProfileService.toEdit();
    };
  }]
};

angular
  .module("app")
  .component("profile", profile);