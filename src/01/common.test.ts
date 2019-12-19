import {computeFuel} from './common';

describe('01', () => {
    describe('computeFuel', () => {
        const testCases = [
            [12, 2],
            [14, 2],
            [1969, 654],
            [100756, 33583],
            [0, 0],
            [1, 0],
            [2, 0],
        ];

        testCases.forEach(([input, expected]) =>
            test('works', () => {
                expect(computeFuel(input)).toEqual(expected);
            }),
        );
    });
});
