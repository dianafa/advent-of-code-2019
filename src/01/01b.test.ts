import {computeSum} from './01b';

describe('01b', () => {
    describe('computeSum', () => {
        const testCases = [
            {input: ['12', '14'], expected: 4},
            {input: ['2'], expected: 0},
            {input: ['1', '1969', '0'], expected: 654},
        ];

        testCases.forEach(({input, expected} :  { input: string[], expected: number }) =>
            test('works', () => {
                expect(computeSum(input)).toEqual(expected);
            }),
        );
    });
});
