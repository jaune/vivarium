window.view = window.view || {};
window.view.PlacableLayer = (function () {

var Layer = window.view.Layer;

var PlacableLayer = function (world) {
	this.world_= world;
};

PlacableLayer.prototype = Object.create(new Layer());

PlacableLayer.prototype.doRender = function () {
	var me = this;
	this.world_.placables.forEach(function (item) {
		switch (item.type) {
			case 'origin':
				me.drawDisk(
					(10 * item.location[0]),
					(10 * item.location[1]),
					6, '#fff');
			break;
			case 'totem':
				me.drawDisk(
					(10 * item.location[0]),
					(10 * item.location[1]),
					4, '#fff');
			break;
			case 'junction':
				me.drawDiamond(
					(10 * item.location[0]),
					(10 * item.location[1]),
					4, '#fff');
			break;
		}
	});
};

return PlacableLayer;

})();

