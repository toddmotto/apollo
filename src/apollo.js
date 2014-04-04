(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.Apollo = factory();
  }
})(this, function () {

  'use strict';

  var exports = {}, _hasClass, _addClass, _removeClass, _toggleClass;

  var _forEach = function (array, callback) {
    if (array instanceof Array === false) {
      array = array.split(' ');
    }
    for (var i = 0; i < array.length; i++) {
      callback(array[i], i);
    }
  };

  if (document.documentElement.classList) {
    _hasClass = function (elem, className) {
      return elem.classList.contains(className);
    };
    _addClass = function (elem, className) {
      elem.classList.add(className);
    };
    _removeClass = function (elem, className) {
      elem.classList.remove(className);
    };
    _toggleClass = function (elem, className) {
      elem.classList.toggle(className);
    };
  } else {
    _hasClass = function (elem, className) {
      return new RegExp('(^|\\s)' + className + '(\\s|$)').test(elem.className);
    };
    _addClass = function (elem, className) {
      if (!exports.hasClass(elem, className)) {
        elem.className += (elem.className ? ' ' : '') + className;
      }
    };
    _removeClass = function (elem, className) {
      if (exports.hasClass(elem, className)) {
        elem.className = elem.className.replace(new RegExp('(^|\\s)*' + className + '(\\s|$)*', 'g'), '');
      }
    };
    _toggleClass = function (elem, className) {
      var toggle = exports.hasClass(elem, className) ? exports.removeClass : exports.addClass;
      toggle(elem, className);
    };
  }

  exports.hasClass = function (elem, className) {
    return _hasClass(elem, className);
  };

  exports.addClass = function (elem, classes) {
    _forEach(classes, function (className) {
      _addClass(elem, className);
    });
  };

  exports.removeClass = function (elem, classes) {
    _forEach(classes, function (className) {
      _removeClass(elem, className);
    });
  };

  exports.toggleClass = function (elem, classes) {
    _forEach(classes, function (className) {
      _toggleClass(elem, className);
    });
  };

  return exports;

});
