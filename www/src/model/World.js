window.model = window.model || {};
window.model.World = (function () {

var OriginSet = window.model.OriginSet;
var ForestSet = window.model.ForestSet;
var TotemSet = window.model.TotemSet;
var JunctionSet = window.model.JunctionSet;

var World = function () {
	
	this.origins_ = new OriginSet();
	this.forests_ = new ForestSet();
	this.totems_ = new TotemSet();
	this.junctions_ = new JunctionSet();

};

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

return World;

})();