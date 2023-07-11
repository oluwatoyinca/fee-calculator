'use strict'

const { Tree } = require("../classes/Tree")
const { importData } = require("../utils/importData")
jest.mock('../utils/importData')

const SUR_CHARGE_RATES = {
    Marketing: ['add', 10],
    Sales: ['add', 15],
    Development: ['add', 20],
    Operations: ['sub', 15],
    Support: ['sub', 5]
}

describe('treeClass', () => {
  it('Check that correct object is returned from Tree.buildTree()', async () => {
    const records = await importData()
    const testTree = new Tree(records, SUR_CHARGE_RATES)
    const result = testTree.buildTree()
    const { root, departments, categories, subCategories, types } = result
    expect(departments).toEqual(["Support", "Development", "Sales", "Operations", "Marketing"])
    expect(categories).toEqual(["Tier 2", "Quality Assurance", "Coding", "Sales Engineering", "Performance Management", "ABM", "Human Resources"])
    expect(subCategories).toEqual(["Cat1", "Cat3", "Cat2"])
    expect(types).toEqual(["TypeB", "TypeA", "TypeC"])
  })
})