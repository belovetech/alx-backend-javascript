const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function (a, b) {
  it('Should return 4', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('Should return -5', function () {
    assert.equal(calculateNumber(-3, -2), -5);
  });

  it('Should return 5', function () {
    assert.equal(calculateNumber(1.4, 3.7), 5);
  });

  it('Should return -5', function () {
    assert.equal(calculateNumber(-1.4, -3.7), -5);
  });

  it('Should return 5', function () {
    assert.equal(calculateNumber(1.45, 3.79), 5);
  });

  it('Should return NaN', function () {
    assert.equal(calculateNumber('a', 'b'), NaN);
  });

  it('Should return NaN', function () {
    assert.equal(calculateNumber('goat', 'dog'), NaN);
  });

  it('Should return NaN', function () {
    assert.equal(calculateNumber([1, 2, 3], 5), NaN);
  });

  it('Should return NaN', function () {
    assert.equal(calculateNumber({ a: 24 }, 5), NaN);
  });

  it('Should return NaN', function () {
    assert.equal(calculateNumber(), NaN);
  });

  it('Should return NaN', function () {
    assert.equal(calculateNumber(2), NaN);
  });
});
