app.controller('LoginSignupCtrl', function ($scope, $auth, $state) {
  $scope.signUp = function () {
    $auth
      .signup({email: $scope.email, password: $scope.password})
      .then(function (response) {
        $auth.setToken(response);
        $state.go('secret');
      })
      .catch(function (response) {
        alert(response.statusText + ': ' + JSON.stringify(response.data));
      })
  };

  $scope.login = function () {
    $auth
      .login({email: $scope.email, password: $scope.password})
      .then(function (response) {
        $auth.setToken(response);
        $state.go('secret');
      })
      .catch(function (response) {
        alert(response.statusText + ': ' + JSON.stringify(response.data));
      })
  };
});
