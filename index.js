var button = document.querySelector('button');
var body = document.querySelector('body');

Object.prototype.on = function () {
	var args = Array.prototype.slice.call(arguments);

	if (typeof this.listeners === 'undefined') {
		this.listeners = [];
	}

	var listener = {
		type: args[0],
		func: args[1]
	};

	this.listeners.push(listener);

	this.addEventListener.apply(this, args);
};

Object.prototype.getEventListeners = function () {
	return this.listeners;
};

button.on('click', function (e) {
	console.log('Button click');
});

button.on('mouseover', function (e) {
	console.log('Button mouseover');
});

var btnEvents = button.getEventListeners();

if (btnEvents[0] && body.offsetWidth < 700) {
	console.log('CLICK!!!');
}