(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.apollo = factory();
  }
})(this, function () {

  'use strict';

  var apollo = {};

  var hasClass, addClass, removeClass, toggleClass;

  var forEach = function (items, fn) {
    if (Object.prototype.toString.call(items) !== '[object Array]') {
      items = items.split(' ');
    }
    for (var i = 0; i < items.length; i++) {
      fn(items[i], i);
    }
  };

  if ('classList' in document.documentElement) {
    hasClass = function (elem, className) {
      return elem.classList.contains(className);
    };
    addClass = function (elem, className) {
      elem.classList.add(className);
    };
    removeClass = function (elem, className) {
      elem.classList.remove(className);
    };
    toggleClass = function (elem, className) {
      elem.classList.toggle(className);
    };
  } else {
    hasClass = function (elem, className) {
      return new RegExp('(^|\\s)' + className + '(\\s|$)').test(elem.className);
    };
    addClass = function (elem, className) {
      if (!hasClass(elem, className)) {
        elem.className += (elem.className ? ' ' : '') + className;
      }
    };
    removeClass = function (elem, className) {
      if (hasClass(elem, className)) {
        elem.className = elem.className.replace(new RegExp('(^|\\s)*' + className + '(\\s|$)*', 'g'), '');
      }
    };
    toggleClass = function (elem, className) {
      (hasClass(elem, className) ? removeClass : addClass)(elem, className);
    };
  }

  apollo.hasClass = function (elem, className) {
    return hasClass(elem, className);
  };

  apollo.addClass = function (elem, classes) {
    forEach(classes, function (className) {
      addClass(elem, className);
    });
  };

  apollo.removeClass = function (elem, classes) {
    forEach(classes, function (className) {
      removeClass(elem, className);
    });
  };

  apollo.toggleClass = function (elem, classes) {
    forEach(classes, function (className) {
      toggleClass(elem, className);
    });
  };

  apollo.fade = function( type, el, duration ) {
    var isIn     = (type == 'in'),
        opacity  = isIn ? 0 : 1,
        interval = 50,
        gap      = interval / duration;

      el.style.filter = 'alpha(opacity=' + opacity + ')';
      el.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity + ')';
        
      if(isIn) {
        el.style.display = 'block';
        el.style.opacity = opacity;
      }

      var fading = window.setInterval(function(){
        opacity = isIn ? opacity + gap : opacity - gap; 
        el.style.opacity = opacity;
        
        if(opacity <= 0 || opacity >= 1) 
          window.clearInterval(fading);

        if(opacity <= 0)
          el.style.display = "none";

      }, interval);
  };

  apollo.animate = function(elem,style,target,duration){
    var start = new Date().getTime(),
        current = elem.style[style],
        unit = (target.indexOf('px') > -1) ? 'px' : '',
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/duration);

            elem.style[style] = (current+step*(target-current))+unit;

            if( step == 1) 
              clearInterval(timer);
        },25);
        
    elem.style[style] = current+unit;

  };

  return apollo;

});
