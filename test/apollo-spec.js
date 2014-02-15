/**
 * Apollo.js
 */
describe('Apollo', function () {

  var $$ = function (selector) {
    return document.querySelector(selector);
  };

  var injectElem = function (className) {
    var elem = document.createElement('div');
    elem.className = className || 'testElement';
    document.body.appendChild(elem);
  };

  /**
   * addClass
   */
  describe('addClass()', function () {

    var elem;

    beforeEach(function () {
      injectElem('fakeElem1');
      elem = $$('.fakeElem1');
      Apollo.addClass(elem, 'fakeAddClass');
    });

    it('should add a class', function () {
      expect(elem.classList.contains('fakeAddClass')).toBe(true);
    });

  });

  /**
   * hasClass
   */
  describe('hasClass()', function () {

    var elem;

    beforeEach(function () {
      injectElem('fakeElem2');
      elem = $$('.fakeElem2');
      Apollo.addClass(elem, 'fakeHasClass');
    });

    it('should check the existence of a class', function () {
      expect(Apollo.hasClass(elem, 'fakeHasClass')).toBe(true);
      expect(Apollo.hasClass(elem, 'fakeHasntClass')).toBe(false);
    });

  });

  /**
   * removeClass
   */
  describe('removeClass()', function () {

    var elem;

    beforeEach(function () {
      injectElem('fakeElem3');
      elem = $$('.fakeElem3');
      Apollo.removeClass(elem, 'fakeElem3');
    });

    it('should remove the class', function () {
      expect(Apollo.hasClass(elem, 'fakeElem3')).toBe(false);
    });

  });

  /**
   * toggleClass
   */
  describe('toggleClass()', function () {

    var elem;

    beforeEach(function () {
      injectElem('fakeElem4');
      elem = $$('.fakeElem4');
      Apollo.toggleClass(elem, 'fakeElem4');
      Apollo.toggleClass(elem, 'fakeElem4Toggle');
    });

    it('should toggle the classes', function () {
      expect(Apollo.hasClass(elem, 'fakeElem4')).toBe(false);
      expect(Apollo.hasClass(elem, 'fakeElem4Toggle')).toBe(true);
    });

  });

});
