window.view = window.view || {};
window.view.RoadLayer = (function () {

var Layer = window.view.Layer;

var RoadLayer = function (world) {
	this.world_= world;
};

RoadLayer.prototype = Object.create(new Layer());

RoadLayer.prototype.doRender = function () {
	var ctx = this.context;

	ctx.strokeStyle = "orange";
	ctx.lineWidth = 1.0;

	this.world_.roads.each(function (road) {
		ctx.beginPath();
		road.ends.forEach(function (name, key) {
			var end = this.world_.placables.get(name);
			if (key === 0) {
				ctx.moveTo(end.location.x * 10, end.location.y * 10);
			} else {
				ctx.lineTo(end.location.x * 10, end.location.y * 10);
			}
		}, this);
		ctx.stroke();
	}, this);
};

return RoadLayer;

})();

