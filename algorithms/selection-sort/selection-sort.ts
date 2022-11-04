function findSmallestIndex(array: number[]) {
  let smallest = array[0]
  let smallestIndex = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i]
      smallestIndex = i
    }
  }

  return smallestIndex
}

export function selectionSort(list: number[]): number[] {
  let sorted: number[] = []

  const iterNum = list.length
  for (let i = 0; i < iterNum; i++) {
    let smallest = findSmallestIndex(list)
    sorted.push(list.splice(smallest, 1)[0])
  }

  return sorted
}
