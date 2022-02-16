angular.module('app').service('sessions', class Sessions {
  $http: any;
  $q: any;

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }
});