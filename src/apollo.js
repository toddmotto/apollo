window.Apollo = (function (window, document) {

  'use strict';

  var classList = document.documentElement.classList;

  var apollo = {};

  if(classList) {

    apollo.hasClass = function (elem, className) {
      return elem.classList.contains(className);
    };

    apollo.addClass = function (elem, className) {
      elem.classList.add(className);
    };

    apollo.removeClass = function (elem, className) {
      elem.classList.remove(className);
    };

    apollo.toggleClass = function (elem, className) {
      elem.classList.toggle(className);
    };

    return apollo; 
  }


  apollo.hasClass = function (elem, className) {
    return new RegExp('(^|\\s)' + className + '(\\s|$)').test(elem.className);
  };

  apollo.addClass = function (elem, className) {
    if (!apollo.hasClass(elem, className)) {
      elem.className += (elem.className ? ' ' : '') + className;
    }
  };

  apollo.removeClass = function (elem, className) {
    if (apollo.hasClass(elem, className)) {
      elem.className = elem.className.replace(new RegExp('(^|\\s)*' + className + '(\\s|$)*', 'g'), '');
    }
  };

  apollo.toggleClass = function (elem, className) {
    var toggle = apollo.hasClass(elem, className) ? apollo.removeClass : apollo.addClass;
    toggle(elem, className);
  };

  return apollo;

})(window, document);
