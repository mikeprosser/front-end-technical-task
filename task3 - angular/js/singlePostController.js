var apiTechTestModule = angular.module('apiTechTest');

apiTechTestModule.controller('SinglePostController', ['$scope', '$routeParams', 'postAPIService', function($scope, $routeParams, postAPIService) {

    $scope.postId = $routeParams.postId;
    $scope.post = {};
    $scope.comments = [];
    $scope.loaded = false;
    $scope.commentsLoaded = false;

    $scope.init = function() {
        postAPIService.getSinglePost($scope.postId, function(res) {
            $scope.post = res;
            $scope.loaded = true;
            postAPIService.getComments($scope.postId, function(res) {
                $scope.comments = res;
                $scope.commentsLoaded = true;
            });
        });
    }
}]);