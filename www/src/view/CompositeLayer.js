window.view = window.view || {};
window.view.CompositeLayer = (function () {

var Layer = window.view.Layer;
var Layers = window.view.Layers;


var Grid = window.view.Grid;
var Mask = window.view.Mask;
var PlacableLayer = window.view.PlacableLayer;
var ResourceLayer = window.view.ResourceLayer;
var RoadLayer = window.view.RoadLayer;

var CompositeLayer = function (world) {

	this.layers_ = new Layers();
	this.mask_ = null;

/*
	this.grid_ = null;
	
	this.placables_ = null;
	this.resouces_ = null;
	this.roads_ = null;
*/
	this.world_= world;

	this.need_redraw_ = true;
};

CompositeLayer.prototype = Object.create(new Layer());

CompositeLayer.prototype.initialize = function (w, h) {
	this.layers_.push(new Grid());
	this.layers_.push(new ResourceLayer(this.world_));
	this.layers_.push(new RoadLayer(this.world_));
	this.layers_.push(new PlacableLayer(this.world_));

	this.layers_.initialize(w, h);

	this.mask_ = new Mask(this.world_);
	this.mask_.initialize(w, h);

	Layer.prototype.initialize.apply(this, arguments);
};

CompositeLayer.prototype.resize = function (w, h) {
	this.layers_.resize(w, h);
	this.mask_.resize(w, h);

	Layer.prototype.resize.apply(this, arguments);
};

CompositeLayer.prototype.render = function (x, y) {
	if (this.need_redraw_) {
		this.layers_.render();
		this.mask_.render();
		this.need_redraw_ = false;
	}

	var ctx = this.context;

	ctx.save();

	ctx.translate(x, y);

	ctx.clearRect(0, 0, this.width_, this.height_);
	ctx.globalCompositeOperation = 'source-over';
	this.layers_.drawIn(ctx, 0, 0);
	ctx.globalCompositeOperation = 'destination-in';
	this.mask_.drawIn(ctx, 0, 0);

	ctx.restore();

};

return CompositeLayer;

})();

