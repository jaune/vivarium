window.view = window.view || {};
window.view.MainLayer = (function () {

var Layer = window.view.Layer;
var Grid = window.view.Grid;
var Mask = window.view.Mask;
var Entities = window.view.Entities;
var ResourceLayer = window.view.ResourceLayer;

var MainLayer = function (world) {
	this.grid_ = null;
	this.mask_ = null;
	this.entities_ = null;
	this.resouces_ = null;

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

	var entities = new Entities(this.world_);

	entities.initialize(w, h);
	entities.render();

	var resouces = new ResourceLayer(this.world_);

	resouces.initialize(w, h);
	resouces.render();

	this.grid_ = grid;
	this.mask_ = mask;
	this.resouces_ = resouces;
	this.entities_ = entities;
};

MainLayer.prototype.render = function () {
	var ctx = this.context;

	this.grid_.drawIn(ctx, 0, 0);

	this.resouces_.drawIn(ctx, 0, 0);

	this.entities_.drawIn(ctx, 0, 0);

	ctx.globalCompositeOperation = 'destination-in';

	this.mask_.drawIn(ctx, 0, 0);
};

return MainLayer;

})();

