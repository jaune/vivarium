window.model = window.model || {};
window.model.TotemSet = (function () {

var Set = window.model.Set;
var Totem = window.model.Totem;

var TotemSet = function () {
};

TotemSet.prototype = Object.create(new Set());

TotemSet.prototype.set = function (name, options) {
	var totem = new Totem(name);

	totem.setOptions(options);

	Set.prototype.set.call(this, name, totem);
	return this;
};

return TotemSet;

})();
