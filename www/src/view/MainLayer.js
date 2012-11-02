window.view = window.view || {};
window.view.MainLayer = (function () {

var Layer = window.view.Layer;
var Grid = window.view.Grid;
var Mask = window.view.Mask;
var PlacableLayer = window.view.PlacableLayer;
var ResourceLayer = window.view.ResourceLayer;
var RoadLayer = window.view.RoadLayer;

var MainLayer = function (world) {
	this.grid_ = null;
	this.mask_ = null;
	this.placables_ = null;
	this.resouces_ = null;
	this.roads_ = null;

	this.world_= world;
};

MainLayer.prototype = Object.create(new Layer());

MainLayer.prototype.initialize = function (w, h) {
	Layer.prototype.initialize.apply(this, arguments);

	var grid = new Grid();

	grid.initialize(w, h);
	grid.render();

	var mask = new Mask(this.world_);

	mask.initialize(w, h);
	mask.render();

	var placables = new PlacableLayer(this.world_);

	placables.initialize(w, h);
	placables.render();

	var roads = new RoadLayer(this.world_);

	roads.initialize(w, h);
	roads.render();

	var resouces = new ResourceLayer(this.world_);

	resouces.initialize(w, h);
	resouces.render();

	this.grid_ = grid;
	this.mask_ = mask;
	this.resouces_ = resouces;
	this.placables_ = placables;
	this.roads_ = roads;
};

MainLayer.prototype.render = function () {
	var ctx = this.context;

	this.grid_.drawIn(ctx, 0, 0);

	this.roads_.drawIn(ctx, 0, 0);

	this.resouces_.drawIn(ctx, 0, 0);

	this.placables_.drawIn(ctx, 0, 0);

	ctx.globalCompositeOperation = 'destination-in';

	this.mask_.drawIn(ctx, 0, 0);

};

return MainLayer;

})();

