window.view = window.view || {};
window.view.Grid = (function () {

var Layer = window.view.Layer;

var Grid = function () {
};

Grid.prototype = Object.create(new Layer());

Grid.prototype.render = function () {
	var w = this.width_;
	var h = this.heigth_;

	var ctx = this.context;

	ctx.strokeStyle = "rgba(255,0,255,0.33)";

	var p = 10;

	var bw = w;
	var bh = h;

	var x = 0;
						
	for (x = 0; x <= bw; x += 20) {
		ctx.moveTo(0.5 + x, 0);
		ctx.lineTo(0.5 + x, bh);
	}

	for (x = 0; x <= bh; x += 20) {
		ctx.moveTo(0, 0.5 + x);
		ctx.lineTo(bw, 0.5 + x);
	}

	ctx.lineWidth = 0.50;
	ctx.stroke();


	for (x = 10; x <= bw; x += 20) {
		ctx.moveTo(0.5 + x, 0);
		ctx.lineTo(0.5 + x, bh);
	}

	for (x = 10; x <= bh; x += 20) {
		ctx.moveTo(0, 0.5 + x);
		ctx.lineTo(bw, 0.5 + x);
	}
	ctx.lineWidth = 0.30;
	ctx.stroke();


};

return Grid;

})();

