const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function (a, b) {
  it('Should return 4', function (done) {
    assert.equal(calculateNumber(1, 3), 4);
    done();
  });
});

describe('calculateNumber', function (a, b) {
  it('Should return -5', function (done) {
    assert.equal(calculateNumber(-3, -2), -5);
    done();
  });
});

describe('calculateNumber', function (a, b) {
  it('Should return 5', function (done) {
    assert.equal(calculateNumber(1.4, 3.7), 5);
    done();
  });
});

describe('calculateNumber', function (a, b) {
  it('Should return -5', function (done) {
    assert.equal(calculateNumber(-1.4, -3.7), -5);
    done();
  });
});

describe('calculateNumber', function (a, b) {
  it('Should return 5', function (done) {
    assert.equal(calculateNumber(1.45, 3.79), 5);
    done();
  });
});

describe('calculateNumber', function (a, b) {
  it('Should return NaN', function (done) {
    assert.equal(calculateNumber('a', 'b'), NaN);
    done();
  });
});

describe('calculateNumber', function (a, b) {
  it('Should return NaN', function (done) {
    assert.equal(calculateNumber('goat', 'dog'), NaN);
    done();
  });
});

describe('calculateNumber', function (a, b) {
  it('Should return NaN', function (done) {
    assert.equal(calculateNumber([1, 2, 3], 5), NaN);
    done();
  });
});

describe('calculateNumber', function (a, b) {
  it('Should return NaN', function (done) {
    assert.equal(calculateNumber({ a: 24 }, 5), NaN);
    done();
  });
});

describe('calculateNumber', function (a, b) {
  it('Should return NaN', function (done) {
    assert.equal(calculateNumber(), NaN);
    done();
  });
});

describe('calculateNumber', function (a, b) {
  it('Should return NaN', function (done) {
    assert.equal(calculateNumber(2), NaN);
    done();
  });
});
