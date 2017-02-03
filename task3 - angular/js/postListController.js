var apiTechTestModule = angular.module('apiTechTest');

apiTechTestModule.controller('PostListController', ['$scope', 'postAPIService', function($scope, postAPIService) {

    $scope.posts = [];
    $scope.loaded = false;
    
    $scope.init = function() {
        postAPIService.getPosts(function(posts) {
            $scope.posts = posts;
            $scope.loaded = true;
        });
    };
}]);