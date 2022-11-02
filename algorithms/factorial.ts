// recursive
export function rFactorial(n: number): number {
  if (n === 1 || n === 0) {
    return 1
  }

  return rFactorial(n - 1) * n
}

// iterative
export function iFactorial(n: number): number {
  let result = 1

  if (n === 1 || n === 0) {
    return 1
  }

  while (n > 1) {
    result = result * n
    n--
  }

  return result
}
