const { computeFuel } = require('./main');

describe('01.1', () => {
  const testCases = [
    [12, 2],
    [14, 2],
    [1969, 654],
    [100756, 33583],
  ];

  testCases.forEach(([input, expected]) =>
    test('computeFuel function', () => {
      expect(computeFuel(input)).toBe(expected);
    })
  );
});
