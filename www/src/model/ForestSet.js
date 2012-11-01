window.model = window.model || {};
window.model.ForestSet = (function () {

var Set = window.model.Set;
var Forest = window.model.Forest;

var ForestSet = function () {
};

ForestSet.prototype = Object.create(new Set());

ForestSet.prototype.set = function (name, options) {
	var forest = new Forest(name);

	forest.setOptions(options);

	Set.prototype.set.call(this, name, forest);
	return this;
};

return ForestSet;

})();
