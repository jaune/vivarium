window.view = window.view || {};
window.view.Mask = (function () {

var Layer = window.view.Layer;

var Mask = function (world) {
	this.world_= world;
};

Mask.prototype = Object.create(new Layer());



Mask.prototype.doRender = function () {
	this.world_.origins.each(function (item) {
		this.drawDisk(
			(10 * item.location.x),
			(10 * item.location.y),
			100, '#fff');
	}, this);

	this.world_.totems.each(function (item) {
		this.drawDisk(
			(10 * item.location.x),
			(10 * item.location.y),
			60, '#fff');
	}, this);
};

return Mask;

})();

