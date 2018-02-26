'use strict';

const Item = (function() {

	const validateName = function(name) {
		console.log(name);
		if (name === "") { throw "Name does not exist."}	
		// if (typeof name === "undefined") { console.error("Name does not exist.")}
		// if (typeof name === "undefined") { console.log("Name does not exist.")}	
	}

	const create = function(name) {
		return {
			id: cuid(),
			name: name,
			checked: false
		}
	}

  return {
    validateName,
    create
  };
}());

