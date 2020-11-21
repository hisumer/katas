export function getFizzbuzz(number) {
    let message = []
    for (let index = 1; index <= number; index++) {
        switch (true) {
            case (index % 3 == 0):
                message.push('fizz')
                break;
            default:
                message.push(index)
        }
    }

    return message;
}