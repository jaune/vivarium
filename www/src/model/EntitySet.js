window.model = window.model || {};
window.model.EntitySet = (function () {

var Set = window.model.Set;

var EntitySet = function () {
	Set.apply(this, arguments);
};

EntitySet.prototype = Object.create(new Set());

EntitySet.prototype.instantiate = function () {
	throw new Error('`EntitySet.prototype.instantiate` is abstract.');
};

EntitySet.prototype.set = function (options) {
	if (!options.hasOwnProperty('name')) {
		throw new Error('Missing option `name`.');
	}

	var entity = this.instantiate();
	entity.setOptions(options);



	Set.prototype.set.call(this, options.name, entity);
};

return EntitySet;

})();
