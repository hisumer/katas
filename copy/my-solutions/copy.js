export function copyArgs(...args) {

    // return args.flat(Infinity) // flat version. con inifinity saca todas las claves

    return args.reduce((accumulatorVal, currentVal) => {
        return [...accumulatorVal, ...currentVal]
    })

    // const result = []
    // for (const array of args) {
    //     result.push(...array)
    // }
    // return result
}
