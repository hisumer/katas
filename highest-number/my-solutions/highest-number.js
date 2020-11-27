export function getHighestNumber(listNumbers) {
    let highest
    listNumbers.forEach(element => {
        highest = (highest === undefined
                    ? element
                    : (element > highest ? element : highest))
    })
    return highest
}
