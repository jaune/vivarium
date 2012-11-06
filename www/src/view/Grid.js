window.view = window.view || {};
window.view.Grid = (function () {

var Layer = window.view.Layer;

var Grid = function () {
};

Grid.prototype = Object.create(new Layer());

Grid.prototype.doRender = function () {
	var w = this.width;
	var h = this.height;

	var h_2 = h / 2;
	var w_2 = w / 2;
	var ctx = this.context;

	ctx.lineWidth = 1;

	var p = 10;

	var x = 0;
					
	ctx.strokeStyle = "rgba(255,255,255, 0.3)";

	for (x = 0; x <= w_2; x += 20) {
		ctx.beginPath();
		ctx.moveTo(0.5 + x, -h_2);
		ctx.lineTo(0.5 + x, h_2);
		ctx.stroke();
	}
	for (x = -20; x >= -w_2; x -= 20) {
		ctx.beginPath();
		ctx.moveTo(0.5 + x, -h_2);
		ctx.lineTo(0.5 + x, h_2);
		ctx.stroke();
	}

	var y = 0;
	for (y = 0; y <= w_2; y += 20) {
		ctx.beginPath();
		ctx.moveTo(-w_2, 0.5 + y);
		ctx.lineTo(w_2, 0.5 + y);
		ctx.stroke();
	}
	for (y = -20; y >= -w_2; y -= 20) {
		ctx.beginPath();
		ctx.moveTo(-w_2, 0.5 + y);
		ctx.lineTo(w_2, 0.5 + y);
		ctx.stroke();
	}
};

return Grid;

})();

