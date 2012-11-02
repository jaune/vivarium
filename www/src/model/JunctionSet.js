window.model = window.model || {};
window.model.JunctionSet = (function () {

var EntitySet = window.model.EntitySet;
var Junction = window.model.Junction;

var JunctionSet = function () {
};

JunctionSet.prototype = Object.create(new EntitySet());

JunctionSet.prototype.instantiate = function () {
	return new Junction();
};


return JunctionSet;

})();
