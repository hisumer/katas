export function getFizzbuzz(number) {
    const list = []
    for (let index = 1; index <= number; index++) {
        switch (true) {
            case (index % 3 === 0 && index % 5 === 0):
                list.push('fizzbuzz')
                break;
            case (index % 3 === 0):
                list.push('fizz')
                break;
            case (index % 5 === 0):
                list.push('buzz')
                break;
            default:
                list.push(index)
        }
    }

    return list;
}
