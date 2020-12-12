import { BeerSingTheSong } from "./beer-sing-the-song.js"

describe('BeerSingTheSong', () => {

    it('should sing a single song', () => {
        // const { given } = setup()
        const given = new BeerSingTheSong()

        const actual = given.singThisVerse(0)

        expect(actual).toStrictEqual([
            "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."
        ])
    })

    it('should return a list with songs', () => {
        const { c } = setup()
        // const given = new BeerSingTheSong()

        const actual = c.singAllVersesStartingFrom(18)

        expect(actual.length).toBe(19)
    })

})

function setup()
{
    const c = new BeerSingTheSong()
    return { c }
}