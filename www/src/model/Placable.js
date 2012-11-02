window.model = window.model || {};
window.model.Placable = (function () {

var Location = window.model.Location;
var Entity = window.model.Entity;

var Placable = function () {
	Entity.apply(this, arguments);
};

Placable.prototype = Object.create(new Entity());

Placable.prototype.setOptions = function (options) {
	Entity.prototype.setOptions.apply(this, arguments);

	if (!options.hasOwnProperty('location')) {
		throw new Error('Missing option `location`.');
	}
	Object.defineProperty(this, 'location', {
		value: new Location(options.location[0], options.location[1])
	});
};

return Placable;

})();