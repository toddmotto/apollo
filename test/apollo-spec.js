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
      Apollo.addClass(elem, 'fakeAddClass1');
      Apollo.addClass(elem, 'fakeAddClass2 fakeAddClass3');
    });

    it('should add a single class', function () {
      expect(elem.classList.contains('fakeAddClass1')).toBe(true);
    });

    it('should add multiple classes', function () {
      expect(elem.classList.contains('fakeAddClass2')).toBe(true);
      expect(elem.classList.contains('fakeAddClass3')).toBe(true);
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
      Apollo.addClass(elem, 'fakeHasClass1');
      Apollo.addClass(elem, 'fakeHasClass2 fakeHasClass3');
    });

    it('should check the existence of a class', function () {
      expect(Apollo.hasClass(elem, 'fakeHasClass1')).toBe(true);
      expect(Apollo.hasClass(elem, 'fakeHasClass2')).toBe(true);
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
      Apollo.addClass(elem, 'fakeRemoveClass1 fakeRemoveClass2');
      Apollo.removeClass(elem, 'fakeElem3');
      Apollo.removeClass(elem, 'fakeRemoveClass1 fakeRemoveClass2');
    });

    it('should remove a single class', function () {
      expect(Apollo.hasClass(elem, 'fakeElem3')).toBe(false);
    });

    it('should remove multiple classes', function () {
      expect(Apollo.hasClass(elem, 'fakeRemoveClass1')).toBe(false);
      expect(Apollo.hasClass(elem, 'fakeRemoveClass2')).toBe(false);
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
      Apollo.toggleClass(elem, 'fakeElem4Toggle1');
      Apollo.toggleClass(elem, 'fakeElem4Toggle2 fakeElem4');
    });

    it('should toggle a single class', function () {
      expect(Apollo.hasClass(elem, 'fakeElem4Toggle1')).toBe(true);
    });

    it('should toggle multiple classes', function () {
      expect(Apollo.hasClass(elem, 'fakeElem4Toggle2')).toBe(true);
      expect(Apollo.hasClass(elem, 'fakeElem4')).toBe(false);
    });

  });

});
