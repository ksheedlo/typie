/// <reference path="../src/Typie.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/node/node.d.ts" />
'use strict';

var chai_;

if (typeof require !== 'undefined') {
  chai_ = require('chai');
} else {
  chai_ = chai;
}

describe('Typie', function () {
  var expect = chai_.expect;

  describe('.toInt', function () {
    it('converts a string to integer', function () {
      expect(Typie.toInt('1337')).to.equal(1337);
    });

    it('allows the user to specify a base', function () {
      expect(Typie.toInt('F00', 16)).to.equal(3840);
    });

    it('keeps integers the same', function () {
      expect(Typie.toInt(9001)).to.equal(9001);
    });
  });

  describe('.toBoolean', function () {
    it('converts falsy values to false', function () {
      expect(Typie.toBoolean(null)).to.equal(false);
      expect(Typie.toBoolean(undefined)).to.equal(false);
      expect(Typie.toBoolean(0)).to.equal(false);
      expect(Typie.toBoolean(NaN)).to.equal(false);
      expect(Typie.toBoolean(false)).to.equal(false);
    });

    it('converts truthy values to true', function () {
      expect(Typie.toBoolean({})).to.equal(true);
      expect(Typie.toBoolean(true)).to.equal(true);
      expect(Typie.toBoolean(1)).to.equal(true);
      expect(Typie.toBoolean('WOW')).to.equal(true);
    });
  });

  describe('.toFloating', function () {
    it('converts a string to a floating point number', function () {
      expect(Typie.toFloating('1.5')).to.equal(1.5);
    });

    it('keeps floating point numbers the same', function () {
      expect(Typie.toFloating(0.25)).to.equal(0.25);
    });
  });
});
