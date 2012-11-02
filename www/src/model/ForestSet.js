window.model = window.model || {};
window.model.ForestSet = (function () {

var EntitySet = window.model.EntitySet;
var Forest = window.model.Forest;

var ForestSet = function () {
};

ForestSet.prototype = Object.create(new EntitySet());

ForestSet.prototype.instantiate = function () {
	return new Forest();
};

return ForestSet;

})();
