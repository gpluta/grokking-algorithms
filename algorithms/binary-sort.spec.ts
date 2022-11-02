import { binarySearch } from './binary-sort'

describe('binary sort test', () => {
  it('test binary sort', () => {
    const myList: number[] = []

    for (let i = 1; i <= 100; i++) {
      myList.push(i)
    }

    expect(binarySearch(myList, 1)).toStrictEqual(0)
    expect(binarySearch(myList, 49)).toStrictEqual(48)
    expect(binarySearch(myList, 50)).toStrictEqual(49)
    expect(binarySearch(myList, 51)).toStrictEqual(50)
    expect(binarySearch(myList, 101)).toStrictEqual(null)
    expect(binarySearch(myList, -1)).toStrictEqual(null)
  })
})
