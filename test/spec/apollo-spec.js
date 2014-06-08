/**
 * apollo.js
 */
describe('apollo', function () {

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
      apollo.addClass(elem, 'fakeAddClass1');
      apollo.addClass(elem, 'fakeAddClass2 fakeAddClass3');
      apollo.addClass(elem, ['fakeAddClass4', 'fakeAddClass5']);
    });

    it('should add a single class', function () {
      expect(elem.classList.contains('fakeAddClass1')).toBe(true);
    });

    it('should add multiple classes', function () {
      expect(elem.classList.contains('fakeAddClass2')).toBe(true);
      expect(elem.classList.contains('fakeAddClass3')).toBe(true);
    });

    it('should add multiple classes passed in as array', function () {
      expect(elem.classList.contains('fakeAddClass4')).toBe(true);
      expect(elem.classList.contains('fakeAddClass5')).toBe(true);
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
      apollo.addClass(elem, 'fakeHasClass1');
      apollo.addClass(elem, 'fakeHasClass2 fakeHasClass3');
    });

    it('should check the existence of a class', function () {
      expect(apollo.hasClass(elem, 'fakeHasClass1')).toBe(true);
      expect(apollo.hasClass(elem, 'fakeHasClass2')).toBe(true);
      expect(apollo.hasClass(elem, 'fakeHasntClass')).toBe(false);
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
      apollo.addClass(elem, 'fakeRemoveClass1 fakeRemoveClass2 fakeRemoveClass3 fakeRemoveClass4');
      apollo.removeClass(elem, 'fakeElem3');
      apollo.removeClass(elem, 'fakeRemoveClass1 fakeRemoveClass2');
      apollo.removeClass(elem, ['fakeRemoveClass3', 'fakeRemoveClass4']);
    });

    it('should remove a single class', function () {
      expect(apollo.hasClass(elem, 'fakeElem3')).toBe(false);
    });

    it('should remove multiple classes', function () {
      expect(apollo.hasClass(elem, 'fakeRemoveClass1')).toBe(false);
      expect(apollo.hasClass(elem, 'fakeRemoveClass2')).toBe(false);
    });

    it('should remove multiple classes passed in as array', function () {
      expect(apollo.hasClass(elem, 'fakeRemoveClass3')).toBe(false);
      expect(apollo.hasClass(elem, 'fakeRemoveClass4')).toBe(false);
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
      apollo.toggleClass(elem, 'fakeElem4Toggle1');
      apollo.toggleClass(elem, 'fakeElem4Toggle2 fakeElem4');
      apollo.toggleClass(elem, ['fakeElem4Toggle3', 'fakeElemToggle4']);
      apollo.toggleClass(elem, ['fakeElemToggle4']);
    });

    it('should toggle a single class', function () {
      expect(apollo.hasClass(elem, 'fakeElem4Toggle1')).toBe(true);
    });

    it('should toggle multiple classes', function () {
      expect(apollo.hasClass(elem, 'fakeElem4Toggle2')).toBe(true);
      expect(apollo.hasClass(elem, 'fakeElem4')).toBe(false);
    });

    it('should toggle multiple classes passed in as array', function () {
      expect(apollo.hasClass(elem, 'fakeElem4Toggle3')).toBe(true);
      expect(apollo.hasClass(elem, 'fakeElem4Toggle4')).toBe(false);
    });

  });

});
