'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if (this.events[funcName]) {
    this.events[funcName].unshift((...args) => func(...args));
  } else this.events[funcName] = [(...args) => func(...args)];
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.events[funcName].forEach(func => {
    func(...args);
  });
};

// var instance = new EventEmitter();
// var counter = 0;
// instance.on('increment', function() {
//   counter++;
// }); // counter should be 0

// instance.on('event2', (param) => console.log('second func: ', param));
// instance.on('event2', (param) => console.log('first func: ', param));
// instance.trigger('increment'); // counter should be 1
// instance.trigger('increment'); // counter should be 2
// instance.trigger('event2', 'hello world!');

module.exports = EventEmitter;
