window.model = window.model || {};
window.model.Entity = (function () {

var Entity = function () {
};

Entity.prototype.setOptions = function (options) {
	if (!options.hasOwnProperty('name')) {
		throw new Error('Missing option `name`.');
	}
	Object.defineProperty(this, 'name', {
		value: options.name
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