angular.module('trendicity')

.controller('favoritesCtrl', function(){

	$scope.$on('$ionicView.enter', function() {
	    // Update favorites
	    $scope.favorites = FavoritesService.getFavorites();

	    // Enable menu dragging
	    $ionicSideMenuDelegate.canDragContent(true);
	  });

});