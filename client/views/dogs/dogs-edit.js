'use strict';

angular.module('animalfarm')
.controller('DogsEditCtrl', function($scope, $state, Dog){
  Dog.findById($state.params.dogId)
  .then(function(response){
    $scope.dog = response.data;
  });

  $scope.edit = function(obj){
    var dog = new Dog(obj);
    dog.update()
    .then(function(){
      $state.go('dogs.show', {dogId: dog._id});
    });
  };
});
