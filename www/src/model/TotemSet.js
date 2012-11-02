window.model = window.model || {};
window.model.TotemSet = (function () {

var EntitySet = window.model.EntitySet;
var Totem = window.model.Totem;

var TotemSet = function () {
};

TotemSet.prototype = Object.create(new EntitySet());

TotemSet.prototype.instantiate = function () {
	return new Totem();
};

return TotemSet;

})();
