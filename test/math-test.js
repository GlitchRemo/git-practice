const { describe, it } = require('node:test');
const assert = require('assert');
const calculator = require('../src/math');

describe('calculator', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      const num1 = 1;
      const num2 = 1;

      assert.strictEqual(calculator.add(num1, num2), 2);
    });
  });
});
