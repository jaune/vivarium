window.view = window.view || {};
window.view.ResourceLayer = (function () {

var Layer = window.view.Layer;

var ResourceLayer = function (world) {
	this.world_= world;
};

ResourceLayer.prototype = Object.create(new Layer());

ResourceLayer.prototype.doRender = function () {
	var me = this;

	this.world_.forests.forEach(function (item) {
		item.area.forEach(function (location, key) {
			me.drawDisk(
				(10 * location[0]),
				(10 * location[1]),
				10, '#74CB67');
		});
	});
};

return ResourceLayer;

})();

