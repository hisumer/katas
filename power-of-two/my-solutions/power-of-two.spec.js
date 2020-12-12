import { getNumberByTwo } from './power-of-two.js'

describe('getNumberByTwo', () => {

    it('should return numbers', () => {
        const given = [1]

        const actual = getNumberByTwo(given)

        expect(actual).toEqual([1])
    })

    it('should return a number power by 2 for a list of numbers ', () => {
        const given = [1, 4, 8]

        const actual = getNumberByTwo(given)

        expect(actual).toEqual([1, 16, 64])
    })
})