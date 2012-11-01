window.model = window.model || {};
window.model.OriginSet = (function () {

var Set = window.model.Set;
var Origin = window.model.Origin;

var OriginSet = function () {
};

OriginSet.prototype = Object.create(new Set());

OriginSet.prototype.set = function (name, options) {
	var origin = new Origin(name);

	origin.setOptions(options);

	Set.prototype.set.call(this, name, origin);
	return this;
};

return OriginSet;

})();
