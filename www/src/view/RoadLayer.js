window.view = window.view || {};
window.view.RoadLayer = (function () {

var Layer = window.view.Layer;

var RoadLayer = function (world) {
	this.world_= world;
};

RoadLayer.prototype = Object.create(new Layer());

RoadLayer.prototype.doRender = function () {
	var ctx = this.context;
	var world = this.world_;

	ctx.strokeStyle = "orange";
	ctx.lineWidth = 1.0;

	world.roads.forEach(function (road) {
		ctx.beginPath();
		road.ends.forEach(function (name, key) {
			var end = world.placables.findOne({name: name});
			if (key === 0) {
				ctx.moveTo(end.location[0] * 10, end.location[1] * 10);
			} else {
				ctx.lineTo(end.location[0] * 10, end.location[1] * 10);
			}
		});
		ctx.stroke();
	});
};

return RoadLayer;

})();

