

//var travellerControllers = angular.module('travellerControllers', []);
var travellerControllers = angular.module('travellerApp', []);

/*
travellerControllers.controller('DestinationsCtrl', ['$scope', '$http', '$routeProvider',
  function ($scope, $http, $routeProvider) {
  	$scope.destinations=false;
  	
   

   /* $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  
  }]);
    */

travellerControllers.controller('indexCtrl', ['$scope', 
  function($scope) {
    $scope.header = true;
    $scope.first= true;
    $scope.destinations = false;
    $scope.footer = true;
    $scope.login=false;
    $scope.ShowDestinations = function(){
    	$scope.first = false;
    	$scope.destinations= true;
    	$scope.groups = false;
    	$scope.airlines= false;
    	$scope.login=false;

    }
    $scope.ShowGroups = function(){
    	$scope.first = false;
    	$scope.airlines= false;
    	$scope.destinations = false;
    	$scope.groups = true;
    	$scope.login=false;
    }
    $scope.ShowAirlines = function(){
    	$scope.first = false;
    	$scope.groups = false;
    	$scope.destinations= false;
    	$scope.airlines= true;
    	$scope.login=false;
    }
    $scope.ShowLogin = function(){
    	$scope.first = false;
    	$scope.airlines= false;
    	$scope.groups = false;
    	$scope.destinations= false;
    	$scope.login=true;

    }
    $scope.ShowHome = function(){
    	$scope.first = true;
    	$scope.airlines= false;
    	$scope.groups = false;
    	$scope.destinations= false;
    	$scope.login=false;

    }
  }]);

/*
travellerControllers.controller('footerCtrl', ['$scope', 
  function($scope) {
    $scope.footer = false;
  }]);
*/

travellerControllers.directive('footer', function() {
  return {
    restrict: 'E',
    templateUrl: './views/footer.html'
  };
});

travellerControllers.directive('header', function() {
  return {
    restrict: 'E',
    templateUrl: './views/header.html'
  };
});

travellerControllers.directive('destinations', function() {
  return {
    restrict: 'E',
    templateUrl: './views/destinations.html'
  };
});

travellerControllers.directive('first', function() {
  return {
    restrict: 'E',
    templateUrl: './views/firstPageBody.html'
  };
});

travellerControllers.directive('groups', function() {
  return {
    restrict: 'E',
    templateUrl: './views/groups.html'
  };
});

travellerControllers.directive('airlines', function() {
  return {
    restrict: 'E',
    templateUrl: './views/airlines.html'
  };
});
travellerControllers.directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: './views/login.html'
  };
});

travellerControllers.controller("loginCtrl", function($scope){
	$scope.data={};
	$scope.save = function() {
		//logheaza user & redirect 
		if ($scope.inputform.$valid)
			//alert('User logged in');
		{
			
		}


		
	}

});
// TO DO: 
// TO DO : PERSONALIZARE ERORI & VALIDARE
// ng-class="{'has-success': inputform.email.$dirty && inputform.email.$valid}"
// ng-class="{'has-success': inputform.password.$dirty && inputform.password.$valid}"
// http://plnkr.co/edit/guaTzs?p=preview
// http://codepen.io/sevilayha/pen/xFcdI

//http://stackoverflow.com/questions/11541695/redirecting-to-a-certain-route-based-on-condition
// header + user http://plnkr.co/edit/2u2ZDE?p=preview
// header + user http://plnkr.co/edit/LvtVEE?p=preview
// header + user http://jsfiddle.net/pyeVM/16/ 
