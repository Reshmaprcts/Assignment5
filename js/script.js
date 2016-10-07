var app=angular.module('app',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise("/index.html");
  $stateProvider
  .state('index',{
    url:'/index.html'
  })
  .state('details',{
    url:'/details/:key',
    views:{
      '':{
        templateUrl:'details.html',
        controller:'firstController'
      }
    }
  })
});
app.controller('firstController',['$scope','$http','$stateParams','$location',function($scope,$http,$stateParams,$location){
  $scope.data;
  $http.get('js/data.json').success(function(response){
    $scope.data=response;
     var k=$stateParams.key;
     if(k!=undefined){
      $scope.t=response.scientistdetails[k].name;
      $scope.u=response.scientistdetails[k].url;
      $scope.d=response.scientistdetails[k].description;
      console.log
   } 
  })
}]);






// var myApp = angular.module('myApp', ['ui.router']);
// myApp.config(function($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise("/index.html");
//   $stateProvider
//   .state('index',{
//     url: '/index.html'
//   })
//     .state('display', 
//     {
//       url: '/display/:key',
//       views: {
//     '': {
//       templateUrl: 'display.html',
//       controller: 'myController'
//     }}
//     })
    
//   });
// myApp.controller('myController',['$scope','$http','$stateParams','$location',function($scope,$http,$stateParams,$location){
//  $scope.data;
//  $http.get('js/data.json').success(function(response){ 
//   $scope.data=response;
//   //console.log(response);
//   var n=$stateParams.key;
//    if(n!=undefined){
//       $scope.t=response.placedetails[n].name;
//       $scope.u=response.placedetails[n].url;
//       $scope.d=response.placedetails[n].description;
//    } 
//   });
// }]);