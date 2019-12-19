import {computeSum} from './01a';

describe('01a', () => {
    describe('computeSum', () => {
        const testCases = [
            {input: ['12', '14'], expected: 4},
            {input: ['2'], expected: 0},
            {input: ['1', '1969', '0'], expected: 654},
        ];

        testCases.forEach(({input, expected} :  { input: string[], expected: number }) =>
            test(`works for ${input}`, () => {
                expect(computeSum(input)).toEqual(expected);
            }),
        );
    });
});
