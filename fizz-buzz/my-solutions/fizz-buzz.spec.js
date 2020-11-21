import { getFizzbuzz } from './fizz-buzz'

describe('addAllNumbers', () => {

  it('should return a empty list', () => {
    const given = 0

    const actual = getFizzbuzz(given)

    expect(actual).toEqual([])
  })

  it('should return a list of numbers from 1 to value', () => {
    const given = 18

    const actual = getFizzbuzz(given)

    expect(actual).toEqual([
        1,2,'fizz',4,'buzz','fizz',7,8,'fizz',
        'buzz',11,'fizz',13,14,'fizzbuzz',16,17,'fizz'

    ])
  })
})
