(function () {
  'use strict';

  angular.module('data')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items){
    var itemsCtrller = this;
    itemsCtrller.items = items.data.menu_items;
  }

})();
