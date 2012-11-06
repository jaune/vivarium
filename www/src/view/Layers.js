window.view = window.view || {};
window.view.Layers = (function () {


var Layers = function () {
	this.layers_ = [];
};

Layers.prototype.push = function (layer) {
	this.layers_.push(layer);
};

Layers.prototype.initialize = function (w, h) {
	this.layers_.forEach(function (layer) {
		layer.initialize(w, h);
	});
};

Layers.prototype.resize = function (w, h) {
	this.layers_.forEach(function (layer) {
		layer.resize(w, h);
	});
};

Layers.prototype.render = function () {
	this.layers_.forEach(function (layer) {
		layer.render();
	});
};

Layers.prototype.drawIn = function () {
	var args = arguments;
	this.layers_.forEach(function (layer) {
		layer.drawIn.apply(layer, args);
	});
};


return Layers;

})();

