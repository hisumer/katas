type Counter = Record<string, number>

export function fruitiCounter(fruits: string[]): Counter {
  let counterFruits: Counter = {}
  fruits.forEach(fruit => {
    if (!counterFruits.hasOwnProperty(fruit)) {
      counterFruits[fruit] = 0
    }
    counterFruits[fruit]++
  })
  return counterFruits
}
