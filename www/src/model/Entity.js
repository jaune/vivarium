window.model = window.model || {};
window.model.Entity = (function () {

	
var Location = window.model.Location;

var Entity = function () {
};

Entity.prototype.setOptions = function (options) {
	if (!options.hasOwnProperty('location')) {
		throw new Error('Missing option `location`.');
	}
	Object.defineProperty(this, 'location', {
		value: new Location(options.location[0], options.location[1])
	});


	if (!options.hasOwnProperty('label')) {
		throw new Error('Missing option `label`.');
	}
	Object.defineProperty(this, 'label', {
		value: options.label
	});
};



return Entity;

})();