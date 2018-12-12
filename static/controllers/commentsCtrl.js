app.controller("CommentsCtrl", function($scope, $state, $auth, $http, $stateParams) {
	$http({
        method: "GET",
        url: 'https://api.github.com/repos/' + $stateParams.owner + '/' + $stateParams.repo + '/issues/' +
            $stateParams.number + '/comments',
        skipAuthorization: true
    }).then(function mySuccess(response){
        $scope.data = response.data;
    }, function myError(response){
        alert(response.statusText + ': ' + JSON.stringify(response.data));
    });

	$scope.logout = function() {
        $auth.logout();
        $state.go("home");
    };
});
