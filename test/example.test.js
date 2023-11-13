const chai = require('chai');
const expect = chai.expect;
const findArithmeticProgression = require('../app.js');

describe('Positive-Test', () => {
  it('Positive-Test with values: 1, 5, 3', () => {
    const result = findArithmeticProgression(1, 5, 3);
    expect(result).to.equal(9);
  });

  it('Positive-Test with values: 10, 15, 5', () => {
    const result = findArithmeticProgression(10, 15, 5);
    expect(result).to.equal(30);
  });

  it('Positive-Test with values: 7, 8, 4', () => {
    const result = findArithmeticProgression(7, 8, 4);
    expect(result).to.equal(10);
  });

  it('Positive-Test with, limit values: 1, 100, 1000', () => {
    const result = findArithmeticProgression(1, 100, 1000);
    expect(result).to.equal(98902);
  });
});

describe('Negative-Test', () => {
  it('Negative test with lower bound values: 0, 2, 4', () => {
    const result = findArithmeticProgression(0, 2, 4);
    expect(result).to.equal(-2);
  });

  it('Negative test with upper bound values: 1001, 11, 22', () => {
    const result = findArithmeticProgression(1001, 11, 22);
    expect(result).to.equal(-2);
  });

  it('Negative test with lower bound values: 17, 0, 154', () => {
    const result = findArithmeticProgression(17, 0, 154);
    expect(result).to.equal(-2);
  });

  it('Negative test with upper bound values: 21, 1001, 12', () => {
    const result = findArithmeticProgression(21, 1001, 12);
    expect(result).to.equal(-2);
  });

  it('Negative test with lower bound values: 74, 85, 0', () => {
    const result = findArithmeticProgression(74, 85, 0);
    expect(result).to.equal(-2);
  });

  it('Negative test with upper bound values: 31, 34, 1001', () => {
    const result = findArithmeticProgression(31, 34, 1001);
    expect(result).to.equal(-2);
  });

  it('Negative test with invalid type values: test, 34, 1001', () => {
    const result = findArithmeticProgression("test", 34, 1001);
    expect(result).to.equal(-1);
  });

  it('Negative test with invalid type values: 12, 18.123, 99', () => {
    const result = findArithmeticProgression(12, 18.123, 99);
    expect(result).to.equal(-1);
  });

  it('Negative test with invalid type values: 2, 121, (_=-', () => {
    const result = findArithmeticProgression(2, 121, "(_=-");
    expect(result).to.equal(-1);
  });
});
