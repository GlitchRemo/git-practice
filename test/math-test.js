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

  describe('sub', () => {
    it('should add two numbers', () => {
      const num1 = 1;
      const num2 = 1;

      assert.strictEqual(calculator.sub(num1, num2), 0);
    });
  });

  describe('mul', () => {
    it('should add two numbers', () => {
      const num1 = 1;
      const num2 = 1;

      assert.strictEqual(calculator.mul(num1, num2), 1);
    });
  });
});
