window.model = window.model || {};
window.model.Forest = (function () {

var Resource = window.model.Resource;

var Forest = function () {};

Forest.prototype = Object.create(new Resource());

return Forest;

})();