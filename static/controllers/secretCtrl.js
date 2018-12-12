app.controller('SecretCtrl', function ($scope, $state, $auth, $http) {
  $scope.logout = function () {
    $auth.logout();
    $state.go("home");
  };

  getUserInfo();

  function getUserInfo() {
    $http.get('/user')
      .then(function (response) {
        $scope.user = response.data;
      })
      .catch(function (response) {
        alert(response.statusText + ': ' + JSON.stringify(response.data));
      })
  }
});
