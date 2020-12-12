export class BeerSingTheSong
{

    #verse
    #fullSong = []

    constructor(verse = 0)
    {
        this.#verse = verse
    }

    singThisVerse(verse)
    {
        this.#validateVerseNumber(verse)
        this.#fullSong.push(this.#getVerse())
        return this.#fullSong
    }

    singUntilLoseTheVoice()
    {
        return this.#singVerseFromTo(99)
    }

    singAllVersesStartingFrom(verse)
    {
        return this.#singVerseFromTo(verse)
    }

    #singVerseFromTo(verse)
    {
        verse = this.#validateVerseNumber(verse)
        for (let index = verse; index >= 0; index--) {
            this.#verse = index;
            this.#fullSong.push(this.#getVerse())
        }
        return this.#fullSong
    }


    #validateVerseNumber(verse)
    {
        verse = (verse > 99 ? 99 : verse)
        verse = (verse < 0 ? 0 : verse)
        return this.#verse = verse
    }

    #getVerse()
    {
        switch (this.#verse) {
            case 2:
                return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.'
            case 1:
                return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.'
            case 0:
                return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
            default:
                return this.#verse + ' bottles of beer on the wall, ' + this.#verse + ' bottles of beer.\nTake one down and pass it around, '  + (this.#verse - 1) + ' bottles of beer on the wall.'
        }

    }
}