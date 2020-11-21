import { getFizzbuzz } from './fizz-buzz'

describe('addAllNumbers', () => {
  it('should return a list of numbers from 1 to value', () => {
    const given = 18

    const actual = getFizzbuzz(given)

    expect(actual).toEqual([
        1,2,3,4,5,6,7,8,9,
        10,11,12,13,14,15,16,17,18

    ])
  })
})
