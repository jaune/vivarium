window.model = window.model || {};
window.model.Set = (function () {

var Set = function () {
	this.items_ = {};
};

Set.prototype.find =  function (name) {
	if (!this.items_.hasOwnProperty(name)) {
		return null;
	}
	return this.items_[name];
};

Set.prototype.get = function (name) {
	var item = this.find(name);
	if (!item) {
		throw new TypeError('Missing `'+name+'`.');
	}
	return item;
};

Set.prototype.set = function (name, value) {
	this.items_[name] = value;
	return this;
};

Set.prototype.each = function (callback, self) {
	Object.keys(this.items_).forEach(function (name) {
		callback.call(self, this.items_[name], name);
	}, this);
	return this;
};

return Set;

})();
