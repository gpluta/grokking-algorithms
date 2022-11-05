export function euclidean(a: number, b: number): number {
  if (a === 0 && b === 0) {
    return 0
  }

  if (a === 0) {
    return b
  }

  if (b === 0) {
    return a
  }

  let reminder = a % b

  if (reminder === 0) {
    return b
  }

  return euclidean(b, reminder)
}
