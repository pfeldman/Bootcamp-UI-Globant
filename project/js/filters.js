(function(){
	angular.module('moviesFilters', [])
	.filter('trustUrl', function ($sce) {
	    return function(url) {
	      return $sce.trustAsResourceUrl(url);
	    };
	});
})();