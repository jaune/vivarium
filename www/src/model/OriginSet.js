window.model = window.model || {};
window.model.OriginSet = (function () {

var EntitySet = window.model.EntitySet;
var Origin = window.model.Origin;

var OriginSet = function () {
};

OriginSet.prototype = Object.create(new EntitySet());

OriginSet.prototype.instantiate = function () {
	return new Origin();
};

return OriginSet;

})();
