window.view = window.view || {};
window.view.Mask = (function () {

var Layer = window.view.Layer;

var Mask = function (world) {
	this.world_= world;
};

Mask.prototype = Object.create(new Layer());



Mask.prototype.render = function () {
	var w = this.width_;
	var h = this.heigth_;

	var offset_x =  w/2,
		offset_y = h/2;

	this.world_.origins.each(function (item) {
		this.drawDisk(
			(10 * item.location.x) + offset_x,
			(10 * item.location.y) + offset_y,
			100, '#fff');
	}, this);

	this.world_.totems.each(function (item) {
		this.drawDisk(
			(10 * item.location.x) + offset_x,
			(10 * item.location.y) + offset_y,
			60, '#fff');
	}, this);
};

return Mask;

})();

