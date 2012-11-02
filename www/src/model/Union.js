window.model = window.model || {};
window.model.Union = (function () {

var Union = function () {
	this.sets_ = [];
};


Union.prototype.appendSet =  function (set) {
	this.sets_.push(set);
};

Union.prototype.find =  function (name) {
	var result = null;

	this.sets_.forEach(function (set) {
		var item = set.find(name);
		if (item) {
			if (result) {
				throw new Error('Ambiguous name.');
			}
			result = item;
		}
	}, this);
	return result;
};

Union.prototype.get = function (name) {
	var item = this.find(name);
	if (!item) {
		throw new TypeError('Missing `'+name+'`.');
	}
	return item;
};

Union.prototype.each = function (callback, self) {
	this.sets_.forEach(function (set) {
		set.each(callback, self);
	});
};

return Union;

})();
