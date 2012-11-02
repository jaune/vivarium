window.model = window.model || {};
window.model.RoadSet = (function () {

var EntitySet = window.model.EntitySet;
var Road = window.model.Road;

var RoadSet = function () {
};

RoadSet.prototype = Object.create(new EntitySet());

RoadSet.prototype.instantiate = function () {
	return new Road();
};

return RoadSet;

})();
