//it creates a test
// expect is used to make assertions about the expected output of a function
//describe is used to group related tests together ,group of tests test suite
// unit test is a test that tests a single unit of code in isolation
// integration test is a test that tests how different units of code work together
// when testing a function we run function and check for expected output
import { it, expect, describe } from 'vitest';
import { formatMoney } from './money';
describe('formatMoney', () => {
    it('formats 1999 as $19.99', () => {
        expect(formatMoney(1999)).toBe('$19.99');
    });
    it('display 2 decimals', () => {
        expect(formatMoney(2000)).toBe('$20.00');
        expect(formatMoney(100)).toBe('$1.00');
    });

})


