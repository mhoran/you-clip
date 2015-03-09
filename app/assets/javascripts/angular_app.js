//= require angular
//= require slider
//= require_self
//= require_tree ./angular_app
angular.module('app', ['ui.slider']).constant('YT_event', {
  SEEK_IN:  0,
  SEEK_OUT: 1,
});
