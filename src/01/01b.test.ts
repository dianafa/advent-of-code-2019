import {computeSum, computeTotalFuel} from './01b';

describe('01b', () => {
    // describe('computeSum', () => {
    //     const testCases = [
    //         {input: ['12', '14'], expected: 4},
    //         {input: ['2'], expected: 0},
    //         {input: ['1', '1969', '0'], expected: 654},
    //     ];
    //
    //     testCases.forEach(({input, expected} :  { input: string[], expected: number }) =>
    //         test('works', () => {
    //             expect(computeSum(input)).toEqual(expected);
    //         }),
    //     );
    // });

    describe('computeTotalFuel', () => {
        const testCases = [
            {input: 14, expected: 2},
            {input: 1969, expected: 966},
            {input: 100756, expected: 50346},
        ];

        testCases.forEach(({input, expected} :  { input: number, expected: number }) =>
            test(`works for ${input}`, () => {
                expect(computeTotalFuel(input)).toEqual(expected);
            }),
        );
    });
});
