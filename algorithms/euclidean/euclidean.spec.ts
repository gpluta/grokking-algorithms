import { euclidean } from './euclidean'

describe('euclidean test', () => {
  it('test a=0 b=0', () => {
    expect(euclidean(0, 0)).toEqual(0)
  })

  it('test a=0 b=1', () => {
    expect(euclidean(0, 2)).toEqual(2)
  })

  it('test a=1 b=0', () => {
    expect(euclidean(3, 0)).toEqual(3)
  })

  it('test a=1 b=1', () => {
    expect(euclidean(1, 1)).toEqual(1)
  })

  it('test a=7 b=7', () => {
    expect(euclidean(7, 7)).toEqual(7)
  })

  it('test a=16 b=5', () => {
    expect(euclidean(16, 5)).toEqual(1)
  })

  it('test a=282 b=78', () => {
    expect(euclidean(282, 78)).toEqual(6)
  })

  it('test a=282 b=78', () => {
    expect(euclidean(282, 78)).toEqual(6)
  })

  it('test a=78 b=282', () => {
    expect(euclidean(78, 282)).toEqual(6)
  })

  it('test a=-15 b=5', () => {
    expect(euclidean(-15, 5)).toEqual(5)
  })
})
