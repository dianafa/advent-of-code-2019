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
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [8, 0],
            [9, 1],
        ];

        testCases.forEach(([input, expected]) =>
            test(`works for ${input}`, () => {
                expect(computeFuel(input)).toEqual(expected);
            }),
        );
    });
});
