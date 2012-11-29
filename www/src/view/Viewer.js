window.view = window.view || {};
window.view.Viewer = (function () {

var Viewer = function () {
	var element = document.createElement('DIV');
	element.setAttribute('class', 'view--main-stack');

	this.element_ = element;
	
	this.current_ = [0.0, 0.0];
	
	this.before_ = [0.0, 0.0];
	this.after_ = [0.0, 0.0];
	
};

Viewer.prototype.doDragStart = function (ev) {
	this.before_[0] = this.current_[0];
	this.before_[1] = this.current_[1];

	this.current_[0] = ev.distanceX + this.before_[0];
	this.current_[1] = ev.distanceY + this.before_[1];

	this.render();

//	console.debug('doDragStart', ev.distanceX, ev.distanceY);
};

Viewer.prototype.doDragMove = function (ev) {
	this.current_[0] = ev.distanceX + this.before_[0];
	this.current_[1] = ev.distanceY + this.before_[1];

	this.render();

//	console.debug('doDragMove', ev.distanceX, ev.distanceY);
};

Viewer.prototype.doDragEnd = function (ev) {
//	console.debug('doDragEnd', ev);
};

Viewer.prototype.doSwipe = function (ev) {
	this.current_[0] = ev.distanceX + this.before_[0];
	this.current_[1] = ev.distanceY + this.before_[1];

	this.render();

	// console.debug('doSwipe', ev.distanceX, ev.distanceY);
};

Viewer.prototype.doRelease = function (ev) {
	// console.debug('doRelease');
};

Viewer.prototype.doTransformStart = function (ev) {
	// console.debug('doTransformStart');
};

Viewer.prototype.doTransform = function (ev) {
	// console.debug('doTransform');
};

Viewer.prototype.doTransformEnd = function (ev) {
	// console.debug('doTransformEnd');
};

Viewer.prototype.doMouseWheel = function (ev) {
	if (ev.wheelDeltaY < 0) {
		this.zoomOut();
	} else {
		this.zoomIn();
	}
};

Viewer.prototype.doTap = function (ev) {
	console.debug('doTap');
};


Viewer.prototype.zoomOut = function () {
	console.debug('zoomOut');
};

Viewer.prototype.zoomIn = function () {
	console.debug('zoomIn');
};

Viewer.prototype.initializeListeners = function () {
	var element = this.element_;

	var hammer = new Hammer(element);
	hammer.ondragstart = $.proxy(this.doDragStart, this);
	hammer.ondrag = $.proxy(this.doDragMove, this);
	hammer.ondragend = $.proxy(this.doDragEnd, this);
	hammer.onrelease = $.proxy(this.doRelease, this);
	hammer.onswipe = $.proxy(this.doSwipe, this);

	hammer.ontransformstart = $.proxy(this.doTransformStart, this);
	hammer.ontransform = $.proxy(this.doTransform, this);
	hammer.ontransformend = $.proxy(this.doTransformEnd, this);
	
	hammer.ontap = $.proxy(this.doTap, this);

	var me = this;
	$(element).on('mousewheel', $.proxy(this.doMouseWheel, this));
};

Viewer.prototype.initialize = function (w, h, world) {
	this.composite_ = new view.CompositeLayer(world);
	this.composite_.initialize(w, h);

	this.composite_.appendTo(this.element_);
	this.element_.setAttribute('style', 'width:'+w+'px; height:'+h+'px; position: absolute; top: 0; left: 0; margin: 0; padding: 0;');
	this.initializeListeners();
};

Viewer.prototype.appendTo = function (parent) {
	parent.appendChild(this.element_);
	this.render();
};

Viewer.prototype.render = function () {
	if (this.render_requested_ === true) {
		return;
	}
	var me = this;
	window.requestAnimationFrame(function () {
		me.composite_.render(me.current_[0], me.current_[1]);
		me.render_requested_ = false;
	});
	this.render_requested_ = true;
};

Viewer.prototype.resize = function (w, h) {
	this.composite_.resize(w, h);
	this.element_.setAttribute('style', 'width:'+w+'px; height:'+h+'px; position: absolute; top: 0; left: 0; margin: 0; padding: 0;');
	this.render();
};

return Viewer;

})();

