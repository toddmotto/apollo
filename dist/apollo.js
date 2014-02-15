/*! Apollo v1.3.0 | (c) 2014 @toddmotto | MIT license | github.com/toddmotto/apollo */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['Apollo'], factory);
  } else {
    root.Apollo = factory();
  }
})(this, function () {

  'use strict';

  var exports = {};

  if (document.documentElement.classList) {
    exports.hasClass = function (elem, className) {
      return elem.classList.contains(className);
    };
    exports.addClass = function (elem, className) {
      elem.classList.add(className);
    };
    exports.removeClass = function (elem, className) {
      elem.classList.remove(className);
    };
    exports.toggleClass = function (elem, className) {
      elem.classList.toggle(className);
    };
  } else {
    exports.hasClass = function (elem, className) {
      return new RegExp('(^|\\s)' + className + '(\\s|$)').test(elem.className);
    };
    exports.addClass = function (elem, className) {
      if (!exports.hasClass(elem, className)) {
        elem.className += (elem.className ? ' ' : '') + className;
      }
    };
    exports.removeClass = function (elem, className) {
      if (exports.hasClass(elem, className)) {
        elem.className = elem.className.replace(new RegExp('(^|\\s)*' + className + '(\\s|$)*', 'g'), '');
      }
    };
    exports.toggleClass = function (elem, className) {
      var toggle = exports.hasClass(elem, className) ? exports.removeClass : exports.addClass;
      toggle(elem, className);
    };
  }

  return exports;

});
