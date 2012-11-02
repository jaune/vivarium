window.model = window.model || {};
window.model.Road = (function () {

var Entity = window.model.Entity;

var Road = function () {};

Road.prototype = Object.create(new Entity());

Road.prototype.setOptions = function (options) {
	Entity.prototype.setOptions.apply(this, arguments);

	if (!options.hasOwnProperty('ends')) {
		throw new Error('Missing option `ends`.');
	}
	if ((!options.ends.length) || (options.ends.length !== 2)) {
		throw new Error('Invalid option `ends`.');
	}

	Object.defineProperty(this, 'ends', {
		value: options.ends.slice(0)
	});
	
};

return Road;

})();