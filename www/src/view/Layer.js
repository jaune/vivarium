window.view = window.view || {};
window.view.Layer = (function () {


var Layer = function () {
	var canvas = document.createElement('CANVAS');

	canvas.setAttribute('style', 'position: absolute; top: 0; left: 0; margin: 0; padding: 0;');
	this.canvas_ = canvas;

	this.width_ = 0;
	this.height_ = 0;
};


Layer.prototype.initialize = function (w, h) {
	Object.defineProperty(this, 'context', {
		value: this.canvas_.getContext('2d')
	});
	this.resize(w, h);
};

Object.defineProperty(Layer.prototype, 'height', {
	get: function () {
		return this.height_;
	},
	set: function (value) {
		this.height_= value;
		this.canvas_.setAttribute('height', this.height_);
	}
});

Object.defineProperty(Layer.prototype, 'width', {
	get: function () {
		return this.width_;
	},
	set: function (value) {
		this.width_= value;
		this.canvas_.setAttribute('width', this.width_);
	}
});

Layer.prototype.resize = function (w, h) {
	this.width = w;
	this.height = h;
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


Layer.prototype.render = function () {
	var ctx = this.context;
	var w = this.width, h = this.height;

	ctx.clearRect(0, 0, w, h);
	ctx.save();

	ctx.translate(w / 2 , h / 2);
//	ctx.scale(this.z_, this.z_);

	this.doRender();

	ctx.restore();
};

Layer.prototype.doRender = function () {
	throw new Error('Layer.prototype.doRender...');
};

return Layer;

})();

