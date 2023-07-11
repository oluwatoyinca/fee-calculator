'use strict'

const { Leaf } = require("../classes/Leaf")
const { Node } = require("../classes/Node")

describe('nodeClass', () => {
  it('Check that correct fee is calculated for node with direct descendant as leaf', async () => {
    const descendantLeaf1 = new Leaf('Test Leaf 1', 'Descendant Leaf 1', 5, 25.72, ['add', 16] )
    const descendantLeaf2 = new Leaf('Test Leaf 2', 'Descendant Leaf 2', 7, 32.41, ['add', 16] )
    const nodeWithDescendants = new Node('Test Node');
    [descendantLeaf1, descendantLeaf2].map((x, index) => { nodeWithDescendants.descendants[index] = x })
    expect(nodeWithDescendants.fee()).toEqual(412.3452)
  })

  it('Check that correct fee is calculated for node with direct descendant as node', async () => {
    const descendantLeaf1 = new Leaf('Test Leaf 1', 'Descendant Leaf 1', 5, 25.72, ['add', 16] )
    const descendantLeaf2 = new Leaf('Test Leaf 2', 'Descendant Leaf 2', 7, 32.41, ['add', 16] )
    const nodeWithDescendants1 = new Node('Test Node1');
    [descendantLeaf1, descendantLeaf2].map((x, index) => { nodeWithDescendants1.descendants[index] = x })

    const descendantLeaf3 = new Leaf('Test Leaf 3', 'Descendant Leaf 3', 3, 22.72, ['add', 16] )
    const descendantLeaf4 = new Leaf('Test Leaf 4', 'Descendant Leaf 4', 1, 2.41, ['add', 16] )
    const nodeWithDescendants2 = new Node('Test Node2');
    [descendantLeaf3, descendantLeaf4].map((x, index) => { nodeWithDescendants2.descendants[index] = x })

    const nodeWithDescendants3 = new Node('Test Node 3');
    [nodeWithDescendants1, nodeWithDescendants2].map((x) => { nodeWithDescendants3.descendants[x.name] = x })
    expect(nodeWithDescendants3.fee()).toEqual(494.2064)
  })

  it('Check that 0 is returned for node with no descendant', async () => {
    const nodeWithDescendants = new Node('Test Node');
    expect(nodeWithDescendants.fee()).toEqual(0)
  })
})