window.model = window.model || {};
window.model.Origin = (function () {

var Entity = window.model.Entity;

var Origin = function (name) {
	this.name_ = name;
};

Origin.prototype = Object.create(new Entity());

return Origin;

})();
