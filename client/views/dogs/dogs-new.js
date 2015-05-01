'use strict';

angular.module('animalfarm')
.controller('DogsNewCtrl', function($scope, $state, $window, Dog){
  $scope.add = function(obj){
    var dog = new Dog(obj);
    dog.save()
    .then(function(){
      $state.go('dogs.list');
    })
    .catch(function(){
      $window.swal({title: 'Dog Error', text: 'There was a problem creating your dog. Please try again.', type: 'error'});
    });
  };
});
