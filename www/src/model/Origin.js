window.model = window.model || {};
window.model.Origin = (function () {

var Placable = window.model.Placable;

var Origin = function () {};

Origin.prototype = Object.create(new Placable());

return Origin;

})();
