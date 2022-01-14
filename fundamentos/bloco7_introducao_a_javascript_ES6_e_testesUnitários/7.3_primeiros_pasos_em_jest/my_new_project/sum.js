// sum.js
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

/* ----------------------------- */

// sum.js
const sum = (a, b) => a + b;

module.exports = sum;

/* ----------------------------- */

// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});