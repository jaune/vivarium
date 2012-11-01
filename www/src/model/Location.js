window.model = window.model || {};
window.model.Location = (function () {

var Location = function (x, y) {

	Object.defineProperty(this, 'x', {
		value: x
	});

	Object.defineProperty(this, 'y', {
		value: y
	});

};

return Location;

})();
