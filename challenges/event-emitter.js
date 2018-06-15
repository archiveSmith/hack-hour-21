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
  // this will hold messages, for example "increment", and call all callbacks that are associated with it
  // messages = { "increment" : [array of callbacks]}
  this.messages = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if ( this.messages[funcName ]) {
    // if we are already handling these messages, add it to the array
    this.messages[funcName].push(func);
  } else {
    // add the array for the first time
    this.messages[funcName] = [func];
  }
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  const arrayOfCallbacks = this.messages[funcName];

  if (arrayOfCallbacks) {
    arrayOfCallbacks.forEach( (cb) => {
      cb(...args);
    });
  }
};

// var instance = new EventEmitter();
// var counter = 0;
// instance.on('increment', function() {
//   counter++;
// }); // counter should be 0

// instance.on('increment', () => {
//   counter += 5;
// })


// instance.trigger('increment'); 
// console.log(counter);// counter should be 1
// instance.trigger('increment'); // counter should be 2
// console.log(counter);// counter should be 1




module.exports = EventEmitter;

