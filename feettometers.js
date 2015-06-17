// feettometers.js v1.0.0

(function() {

  'use strict';

  var FeetToMeters = function() {};

  FeetToMeters.prototype.get = function(x) {
    if(typeof x !== "number") {
      return 'invalid input';
    } else {
      return x * 0.3048;
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = FeetToMeters;
    } else {
      exports.FeetToMeters = FeetToMeters;
    }
  } else {
    window.FeetToMeters = FeetToMeters;
  }

})();
