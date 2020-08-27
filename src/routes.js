(function () {

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/main-categories.template.html',
      controller: 'CategoriesController as categoryCtrller',
      resolve: {
        items: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/templates/main-items.template.html',
      controller: 'ItemsController as itemsCtrller',
      resolve: {
          items: ['$stateParams', 'MenuDataService',
                  function ($stateParams, MenuDataService) {
                      return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                      .then(function (items) {
                        return items;
                      });
                  }]
      }
    });
  }

})();
