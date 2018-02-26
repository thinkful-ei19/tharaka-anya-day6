/* global cuid */
'use strict';

const Item = (function() {

  const validateName = function(name) {
    if (name === '') {
      throw new TypeError('Name does not exist.');}
    else {
      return name;
    }
    
  };

  const create = function(name) {
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };

  return {
    validateName,
    create
  };
}());

