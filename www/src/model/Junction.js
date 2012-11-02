window.model = window.model || {};
window.model.Junction = (function () {

var Placable = window.model.Placable;

var Junction = function () {
	Placable.apply(this, arguments);
};

Junction.prototype = Object.create(new Placable());

return Junction;

})();
