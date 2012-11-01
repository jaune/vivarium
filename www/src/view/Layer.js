window.view = window.view || {};
window.view.Layer = (function () {


var Layer = function () {
	this.canvas_ = null;
};


Layer.prototype.initialize = function (w, h) {
	var canvas = document.createElement('CANVAS');
	
	this.canvas_ = canvas;
	this.width_ = w;
	this.heigth_ = h;

	this.rezise(w, h);

	Object.defineProperty(this, 'context', {
		value: canvas.getContext('2d')
	});

};

Layer.prototype.rezise = function (w, h) {
	var canvas = this.canvas_;

	this.width_ = w;
	this.heigth_ = h;

	canvas.setAttribute('width', this.width_);
	canvas.setAttribute('height', this.heigth_);
};

Layer.prototype.appendTo = function (parent) {
	parent.appendChild(this.canvas_);
};

Layer.prototype.drawDisk = function (x, y, r, style) {
	var ctx = this.context;

	ctx.fillStyle = style;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2, true);
	ctx.fill();
};

Layer.prototype.drawDiamond = function (x, y, r, style) {
	var ctx = this.context;

	ctx.beginPath();
    ctx.moveTo(x, y + r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x, y - r);
    ctx.lineTo(x - r, y);
    ctx.fill();
};


Layer.prototype.drawIn = function () {
	var args = [], a, i, l;
	for (a = arguments, i = 0, l = a.length; i < l; i++) {
		args.push(a[i]);
	}
	var ctx = arguments[0];
	args[0] = this.canvas_;
	ctx.drawImage.apply(ctx, args);
};

Layer.prototype.render = function () {};

return Layer;

})();

