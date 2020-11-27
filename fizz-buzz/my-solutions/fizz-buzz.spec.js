import { getFizzbuzz } from './fizz-buzz'

describe('addAllNumbers', () => {

    it('should return a list whose length is the same as the initical number', () => {
        const given = 2

        const actual = getFizzbuzz(given)

        expect(actual).toHaveLength(2)
    })


  it('should return a empty list', () => {
    const given = 0

    const actual = getFizzbuzz(given)

    expect(actual).toEqual([])
  })

  it('should return a list mixed with numbers && fizzbuzz', () => {
    const given = 18

    const actual = getFizzbuzz(given)

    expect(actual).toEqual([
        1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
        'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz'

    ])
  })
})
