import { getFizzbuzz } from './fizz-buzz'

describe('addAllNumbers', () => {
  it('should return a list of numbers from 1 to value', () => {
    const given = 18

    const actual = getFizzbuzz(given)

    expect(actual).toEqual([])
  })
})
