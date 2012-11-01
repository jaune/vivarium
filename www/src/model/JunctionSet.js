window.model = window.model || {};
window.model.JunctionSet = (function () {

var Set = window.model.Set;
var Junction = window.model.Junction;

var JunctionSet = function () {
};

JunctionSet.prototype = Object.create(new Set());

JunctionSet.prototype.set = function (name, options) {
	var junction = new Junction(name);

	junction.setOptions(options);

	Set.prototype.set.call(this, name, junction);
	return this;
};

return JunctionSet;

})();
