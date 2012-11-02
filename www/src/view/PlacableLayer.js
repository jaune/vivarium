window.view = window.view || {};
window.view.PlacableLayer = (function () {

var Layer = window.view.Layer;

var PlacableLayer = function (world) {
	this.world_= world;
};

PlacableLayer.prototype = Object.create(new Layer());

PlacableLayer.prototype.render = function () {
	var ctx = this.context;
	var w = this.width_;
	var h = this.heigth_;

	ctx.translate(w/2, h/2);

	this.world_.origins.each(function (item) {
		this.drawDisk(
			(10 * item.location.x),
			(10 * item.location.y),
			6, '#fff');
	}, this);

	this.world_.totems.each(function (item) {
		this.drawDisk(
			(10 * item.location.x),
			(10 * item.location.y),
			4, '#fff');
	}, this);

	this.world_.junctions.each(function (item) {
		this.drawDiamond(
			(10 * item.location.x),
			(10 * item.location.y),
			4, '#fff');
	}, this);
};

return PlacableLayer;

})();
