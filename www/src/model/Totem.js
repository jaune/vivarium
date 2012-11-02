window.model = window.model || {};
window.model.Totem = (function () {

var Placable = window.model.Placable;

var Totem = function () {};

Totem.prototype = Object.create(new Placable());

return Totem;

})();
