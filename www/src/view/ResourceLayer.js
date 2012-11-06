window.view = window.view || {};
window.view.ResourceLayer = (function () {

var Layer = window.view.Layer;

var ResourceLayer = function (world) {
	this.world_= world;
};

ResourceLayer.prototype = Object.create(new Layer());

ResourceLayer.prototype.doRender = function () {
	this.world_.forests.each(function (item) {
		item.area.each(function (location, key) {
			this.drawDisk(
				(10 * location.x),
				(10 * location.y),
				10, '#74CB67');
		}, this);
	}, this);
};

return ResourceLayer;

})();

