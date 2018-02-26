/* global cuid, Item */
'use strict';

const store = (function() {

  const addItem = function(name) {
    try {
      Item.validateName(name);
      const results = Item.create(name);
      this.items.push(results);
    }
    catch(e) {
      console.log(`Cannot add item: ${e.message}`);
    }
  };
  // returns item by that id
  const findById = function(id) {
    this.items.find(id => items.id === id);
  };
	
  const findAndToggleChecked = function(id) {
    const foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
  };
	
  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      const newItem = findById(id);
      newItem.name = newName;
    }
    catch(e) {
      console.log(`Cannot update name: ${e.message}`);
    }
  };

  const findAndDelete = function(id) {
    const newId = this.items.findIndex(item => item.id === id); // returns id
    this.items.splice(newId, 1);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  const setSearchTerm = function(val) {
    this.searchTerm = val;
  }


  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  return {
    items, 
    hideCheckedItems, 
    searchTerm,
    addItem,
    findById,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
        
}());

