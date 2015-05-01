'use strict';

angular.module('animalfarm')
.factory('Dog', function($http, nodeUrl){

  function Dog(obj){
    this._id = obj._id;
    this.name = obj.name;
    this.age = obj.age;
    this.sex = obj.sex;
    this.photo = obj.photo;
  }

  Dog.findById = function(dogId){
    return $http.get(nodeUrl + '/dogs/' + dogId);
  };

  Dog.find = function(){
    return $http.get(nodeUrl + '/dogs');
  };

  Dog.prototype.save = function(){
    return $http.post(nodeUrl + '/dogs', this);
  };

  Dog.prototype.update = function(){
    return $http.put(nodeUrl + '/dogs/' + this._id, this);
  };

  Dog.prototype.destroy = function(){
    return $http.delete(nodeUrl + '/dogs/' + this._id);
  };

  return Dog;
});
