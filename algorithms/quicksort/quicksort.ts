export function quicksort(arr: number[]): number[] {
  if (arr.length < 2) return arr

  if (arr.length === 2) {
    if (arr[1] < arr[0]) {
      ;[arr[0], arr[1]] = [arr[1], arr[0]]
    }
  }

  const pivotIndex = Math.floor(arr.length / 2)

  const smaller = arr.filter((el) => el < arr[pivotIndex])
  const larger = arr.filter((el) => el > arr[pivotIndex])

  return [...quicksort(smaller), ...[arr[pivotIndex]], ...quicksort(larger)]
}
