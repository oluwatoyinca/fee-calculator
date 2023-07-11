'use strict'

const { Leaf } = require("../classes/Leaf")

describe('leafClass', () => {
  it('Check that correct fee is calculated when surCharge is positive', async () => {
    const positiveSurChargeLeaf = new Leaf('Test Leaf 1', 'Positive Surcharge Leaf', 5, 25.72, ['add', 16] )
    expect(positiveSurChargeLeaf.fee()).toEqual(149.176)
  })

  it('Check that correct fee is calculated when surCharge is negative', async () => {
    const negativeSurChargeLeaf = new Leaf('Test Leaf 2', 'Negative Surcharge Leaf', 7, 32.41, ['sub', 22] )
    expect(negativeSurChargeLeaf.fee()).toEqual(176.9586)
  })
})