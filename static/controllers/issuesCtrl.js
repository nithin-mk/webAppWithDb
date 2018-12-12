app.controller("IssuesCtrl", function($scope, $state, $auth, $http){
	$scope.myFunction = function() {
		var components = $scope.url.split("/");
		$scope.owner = components[0];
		$scope.repo = components[1];
		$http({
			method: "GET",
			url: 'https://api.github.com/repos/' + $scope.owner + '/' + $scope.repo + '/issues',
            skipAuthorization: true
		}).then(function mySuccess(response){
			$scope.data = response.data;
		},function myError(response){
			alert(response.statusText + ': ' + JSON.stringify(response.data));
		});
	};

    $scope.logout = function () {
        $auth.logout();
        $state.go("home");
    };
});
