import { getHighestNumber } from './highest-number'

describe('getHighestNumber', () => {

    it('should return 1', () => {
        const given = [1]

        const actual = getHighestNumber(given)

        expect(actual).toBe(1)
    })

    it('should work with a list of numbers', () => {
        const given = [1, 2, 3]

        const actual = getHighestNumber(given)

        expect(actual).toBe(3)
    })

    it('should work with negative numbers', () => {
        const given = [-1, -2]

        const actual = getHighestNumber(given)

        expect(actual).toBe(-1)
    })

})
