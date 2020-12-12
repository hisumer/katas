import { copyArgs } from "./copy"
// const { copy } = require("./copy")

describe('copyArgs', () => {

    it('should return empty array', () => {
        const given = [
            [],
            [],
            [],
        ]

        const actual = copyArgs(...given)

        expect(actual).toEqual([])
    })


    it('should return single array from multi array', () => {
        const given = [
            [1, 2],
            [3, 4],
        ]

        const actual = copyArgs(...given)

        expect(actual).toEqual([1, 2, 3, 4])
    })


})
