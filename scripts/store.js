/* global cuid */
'use strict';

const store = (function() {
  
  //   const addItem = function(itemName) {};
  //   const updateItem = function(id, updateData) {};
  //   const toggleHideCheckedFilter = function() {};
  const item = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  return {
    item, hideCheckedItems, searchTerm
    // addItem, updateItem, toggleHideCheckedFilter
  };
        
}());

