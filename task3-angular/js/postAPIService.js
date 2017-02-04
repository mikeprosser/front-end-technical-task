apiTechTestModule.service('postAPIService', ['$http', function($http) {

    var apiUrl = "https://jsonplaceholder.typicode.com/posts";

    this.getPosts = function(cb) {
        $http({
            method: 'GET',
            url: apiUrl
        }).then(function(res) {
            cb(res.data);
        }, function(err) {
            alert(err);
        });
    };

    this.getSinglePost = function(id, cb) {
        $http({
            method: 'GET',
            url: apiUrl + "/" + id
        }).then(function(res) {
            cb(res.data);
        }, function(err) {
            alert(err);
        });
    };
    
    this.getComments = function(id, cb) {
        $http({
            method: 'GET',
            url: apiUrl + "/" + id + "/comments"
        }).then(function(res) {
            cb(res.data);
        }, function(err) {
            alert(err);
        });
    };
}]);