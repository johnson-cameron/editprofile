"use strict";

function ProfileService($location) {

  let userData = {
    name: "Grant Chirpus",
    email: "grant@grandcircus.co",
    bio: "I am pretty cool. I have a great job. I like to play Tetris. I am pretty ok at AngularJS."
  };

  const getUserProfile = () => {
    return userData;
  };

  const setUserProfile = (user) => {
    userData = user;
    $location.path("/profile");
  };

  const toEdit = () => {
    $location.path("/edit-profile");
  };

  return {
    getUserProfile,
    setUserProfile,
    toEdit
  };

}

angular
  .module("app")
  .factory("ProfileService", ProfileService);