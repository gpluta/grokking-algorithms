export function euclidean(a: number, b: number): number | null {
  if ([a, b].includes(0)) {
    return null
  }

  let reminder = a % b

  if (reminder === 0) {
    return b
  }

  return euclidean(b, reminder)
}
