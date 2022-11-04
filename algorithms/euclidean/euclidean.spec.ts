import { euclidean } from './euclidean'

describe('euclidean test', () => {
  it('test x=0 y=1', () => {
    expect(euclidean(0, 1)).toEqual(null)
  })

  it('test x=1 y=1', () => {
    expect(euclidean(1, 1)).toEqual(1)
  })

  it('test x=7 y=7', () => {
    expect(euclidean(7, 7)).toEqual(7)
  })

  it('test x=16 y=5', () => {
    expect(euclidean(16, 5)).toEqual(1)
  })

  it('test x=282 y=78', () => {
    expect(euclidean(282, 78)).toEqual(6)
  })

  it('test x=282 y=78', () => {
    expect(euclidean(282, 78)).toEqual(6)
  })

  it('test x=78 y=282', () => {
    expect(euclidean(78, 282)).toEqual(6)
  })

  it('test x=-15 y=5', () => {
    expect(euclidean(-15, 5)).toEqual(5)
  })
})
