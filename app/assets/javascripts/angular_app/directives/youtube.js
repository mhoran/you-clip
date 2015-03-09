// YouTube directive inspired by
// http://blog.oxrud.com/posts/creating-youtube-directive/

angular.module('app').directive('youtube', function($window, YT_event) {
  return {
    restrict: "E",

    scope: {
      height: "@",
      width: "@",
      videoId: "=",
      duration: "=?",
      seekPoint: "=?",
      clipPoints: "="
    },

    template: '<div></div>',

    link: function(scope, element, attrs, $rootScope) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      var player;

      $window.onYouTubeIframeAPIReady = function() {

        player = new YT.Player(element.children()[0], {
          playerVars: {
            autoplay: 0,
            html5: 1,
            theme: "light",
            modesbranding: 0,
            color: "white",
            iv_load_policy: 3,
            showinfo: 1,
            controls: 1,
            start: scope.clipPoints[0],
            end: scope.clipPoints[1]
          },
          
          height: scope.height,
          width: scope.width,
          videoId: scope.videoId,

          events: {
            'onReady': function(event) {
              scope.$apply(function() {
                scope.duration = event.target.getDuration();
              });
            }
          }
        });
      };

      scope.$watch('seekPoint', function(newValue, oldValue) {
        if (newValue == oldValue) {
          return;
        }

        player.seekTo(newValue, true);
      });

      scope.$on(YT_event.SEEK_IN, function () {
        player.seekTo(scope.clipPoints[0]);
      });

      scope.$on(YT_event.SEEK_OUT, function () {
        player.seekTo(scope.clipPoints[1]);
      });
    }
  };
});
