window.model = window.model || {};
window.model.Area = (function () {

var Area = function (locations) {
	this.locations_ = locations || [];
};

Area.prototype.each = function (callback, self) {
	this.locations_.forEach(callback, self);
};

return Area;

})();
