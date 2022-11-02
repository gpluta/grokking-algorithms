const myList: number[] = []

for (let i = 1; i <= 1_000; i++) {
  myList.push(i)
}

/**
 * Returns index of the searched element
 *
 * @param list
 * @param search
 */
export function binarySearch(list: number[], search: number): number | null {
  let lowIdx = 0
  let highIdx = list.length - 1

  while (lowIdx <= highIdx) {
    let midIdx = Math.floor((lowIdx + highIdx) / 2)
    let guess = list[midIdx]

    if (guess === search) {
      // If the number is there, return the index
      return midIdx
    } else if (guess > search) {
      // if the searched number is lower, than the one guessed,
      // limit highIdx to half of the current selection
      highIdx = midIdx - 1
    } else {
      // .. or else, limit the low to the half of the current selection
      lowIdx = midIdx + 1
    }
  }

  return null
}
