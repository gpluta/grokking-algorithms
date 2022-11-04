import { rFactorial, iFactorial } from './factorial'

describe('factorial test', () => {
  it('test recursive factorial', () => {
    expect(rFactorial(0)).toStrictEqual(1)
    expect(rFactorial(1)).toStrictEqual(1)
    expect(rFactorial(2)).toStrictEqual(2)
    expect(rFactorial(3)).toStrictEqual(6)
    expect(rFactorial(5)).toStrictEqual(120)
    expect(rFactorial(6)).toStrictEqual(720)
    expect(rFactorial(11)).toStrictEqual(39_916_800)
  })

  it('test iterative factorial', () => {
    expect(iFactorial(0)).toStrictEqual(1)
    expect(iFactorial(1)).toStrictEqual(1)
    expect(iFactorial(2)).toStrictEqual(2)
    expect(iFactorial(3)).toStrictEqual(6)
    expect(iFactorial(5)).toStrictEqual(120)
    expect(iFactorial(6)).toStrictEqual(720)
    expect(iFactorial(11)).toStrictEqual(39_916_800)
  })
})
