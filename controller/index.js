var content = require('./pagecontent.js');
var info = require('./personalInfo.js');
var proj = require('./projects.js');

var reader = new FileReader();

var app = angular.module('AboutMe', []);
app.controller('AboutMe', ['$scope', function($scope){
	
	$scope.languagelist = content.language;
	var langkey = Cookies.get('name');
	if(langkey === undefined){
		$scope.language = $scope.languagelist.en;
		Cookies.set('language', $scope.languagelist.en.key, { expires: 30 });
	}
	else {
		$scope.language = $scope.languagelist[langkey];
	}

	$scope.imgpath = './src/img/';

	$scope.link = content.link;
	$scope.headers = content.GetHeadersByLang($scope.language.key);
	$scope.info = info.GetInfoByLang($scope.language.key);
	$scope.projects = proj.GetProjByLang($scope.language.key);
	
	$scope.ChangeLanguage = function(langkey){
		$scope.language = $scope.languagelist[langkey];
		$scope.info = info.GetInfoByLang(langkey);
		$scope.projects = proj.GetProjByLang($scope.language.key);
		$scope.headers = content.GetHeadersByLang($scope.language.key);

		Cookies.set('language', langkey, { expires: 30, path: '' });
	}
}]);