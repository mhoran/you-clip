angular.module('app').controller('clipController', function($scope, YT_event) {
  $scope.YT_event = YT_event;

  $scope.sendControlEvent = function (ctrlEvent) {
    this.$broadcast(ctrlEvent);
  }

  $scope.duration = 0;

  $scope.seekPoint = 0;

  $scope.clipPoints = [0, 0];

  $scope.slider = {
    options: {
      stop: function(event, ui) {
        $scope.$apply(function() {
          $scope.seekPoint = ui.value;
          $scope.clipPoints = ui.values;
        });
      },
      range: true
    }
  }

  $scope.$watch('duration', function(newValue, oldValue) {
    if (newValue == oldValue) {
      return;
    }

    $scope.clipPoints = [0, newValue];
  });
});
