import { getFizzbuzz } from './fizz-buzz'

describe('addAllNumbers', () => {
  it('should return a list of numbers from 1 to value', () => {
    const given = 18

    const actual = getFizzbuzz(given)

    expect(actual).toEqual([
        1,2,'fizz',4,'buzz','fizz',7,8,'fizz',
        'buzz',11,'fizz',13,14,'fizz',16,17,'fizz'

    ])
  })
})
