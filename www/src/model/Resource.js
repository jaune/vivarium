window.model = window.model || {};
window.model.Resource = (function () {

var Area = window.model.Area;
var Location = window.model.Location;
var Entity = window.model.Entity;


var Resource = function () {};

Resource.prototype = Object.create(new Entity());

Resource.prototype.setOptions = function (options) {
	Entity.prototype.setOptions.apply(this, arguments);

	if (!options.hasOwnProperty('area')) {
		throw new Error('Missing option `area`.');
	}
	if ((!options.area.length) || (options.area.length % 2 !== 0)) {
		throw new Error('Invalid option `area`.');
	}
	var locations = [];
	for (var a = options.area, i = 0, l = a.length; i < l; i += 2) {
		locations.push(new Location(a[i], a[i + 1]));
	}

	Object.defineProperty(this, 'area', {
		value: new Area(locations)
	});
};



return Resource;

})();