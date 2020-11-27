export function getHighestNumber(listNumbers) {

    // forEach get Max
    // let highest
    // listNumbers.forEach(element => {
    //     highest = (highest === undefined
    //                 ? element
    //                 : (element > highest ? element : highest))
    // })

    // reduce get Max
    // const highest = listNumbers.reduce((prev, current) => {
    //     return (prev > current) ? prev : current
    // })

    // reduce get Max no arrow
    return listNumbers.reduce((prev, current) => (prev > current) ? prev : current)
}
