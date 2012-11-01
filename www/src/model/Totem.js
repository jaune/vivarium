window.model = window.model || {};
window.model.Totem = (function () {

var Entity = window.model.Entity;

var Totem = function (name) {
	this.name_ = name;
};

Totem.prototype = Object.create(new Entity());

return Totem;

})();
