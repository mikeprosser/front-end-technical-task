var apiTechTestModule = angular.module('apiTechTest', ['ngRoute'])

apiTechTestModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/posts', {
            templateUrl: 'partials/post-list.html',
            controller: 'PostListController'
        })
        .when('/posts/:postId', {
            templateUrl: 'partials/single-post.html',
            controller: 'SinglePostController'
        })
        .otherwise({
            redirectTo: '/posts'
        });

    $locationProvider.hashPrefix('');
}]);