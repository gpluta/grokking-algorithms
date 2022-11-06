import { quicksort } from './quicksort'

describe('selection sort test', () => {
  it('test []', () => {
    expect(quicksort([])).toEqual([])
  })

  it('test [1]', () => {
    expect(quicksort([1])).toEqual([1])
  })

  it('test [5, 4, 3, 2, 1]', () => {
    let list = [5, 4, 3, 2, 1]
    let listSorted = list.slice().sort((a, b) => a - b)
    expect(quicksort(list)).toEqual(listSorted)
  })

  it('test [1, 5, 4, 7, 9, 12, 55, 2, 3, 14]', () => {
    let list = [1, 5, 4, 7, 9, 12, 55, 2, 3, 14]
    let listSorted = list.slice().sort((a, b) => a - b)
    expect(quicksort(list)).toEqual(listSorted)
  })
})
