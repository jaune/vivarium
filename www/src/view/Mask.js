window.view = window.view || {};
window.view.Mask = (function () {

var Layer = window.view.Layer;

var Mask = function (world) {
	this.world_= world;
};

Mask.prototype = Object.create(new Layer());



Mask.prototype.doRender = function () {
	var me = this;
	this.world_.placables.forEach(function (item) {
		switch (item.type) {
			case 'origin':
				me.drawDisk(
					(10 * item.location[0]),
					(10 * item.location[1]),
					100, '#fff');
			break;
			case 'totem':
				me.drawDisk(
					(10 * item.location[0]),
					(10 * item.location[1]),
					60, '#fff');
			break;
		}
	});
};

return Mask;

})();

