window.model = window.model || {};
window.model.World = (function () {

var Union = window.model.Union;

var OriginSet = window.model.OriginSet;
var ForestSet = window.model.ForestSet;
var TotemSet = window.model.TotemSet;
var JunctionSet = window.model.JunctionSet;
var RoadSet = window.model.RoadSet;

var World = function () {
	
	this.origins_ = new OriginSet();
	this.forests_ = new ForestSet();
	this.totems_ = new TotemSet();
	this.junctions_ = new JunctionSet();
	this.roads_ = new RoadSet();

	this.placables_ = new Union();

	this.placables_.appendSet(this.origins_);
	this.placables_.appendSet(this.totems_);
	this.placables_.appendSet(this.junctions_);
};

Object.defineProperty(World.prototype, 'placables', {
	get: function () {
		return this.placables_;
	}
});

Object.defineProperty(World.prototype, 'origins', {
	get: function () {
		return this.origins_;
	}
});

Object.defineProperty(World.prototype, 'totems', {
	get: function () {
		return this.totems_;
	}
});

Object.defineProperty(World.prototype, 'junctions', {
	get: function () {
		return this.junctions_;
	}
});

Object.defineProperty(World.prototype, 'forests', {
	get: function () {
		return this.forests_;
	}
});

Object.defineProperty(World.prototype, 'roads', {
	get: function () {
		return this.roads_;
	}
});

return World;

})();