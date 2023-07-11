import { Node } from "./Node.js"
import { Leaf } from "./Leaf.js"

export class Tree {
    constructor(data, surChargeRates) {
      this.data = data
      this.surChargeRates = surChargeRates
    }

    buildTree() {
        const root = new Node('Root')
        const departments = [], categories = [], subCategories = [], types = []

        const createAndAttachNodes = (x) => {
            const dep = x.Department__c
            const cat = x.Category__c
            const subCat = x.Sub_Category__c
            const type = x.Type__c
            // Creating all nodes and their decendants based on data from the imported csv
            // to allow more diverse data and tree structure in a larger system

            // Department Nodes
            if(!(root.descendants.hasOwnProperty(dep))) root.descendants[dep] = new Node(dep)
            if(!(departments.includes(dep))) departments.push(dep)

            // Category Nodes
            if(!(root.descendants[dep].descendants.hasOwnProperty(cat)))
            root.descendants[dep].descendants[cat] = new Node(cat)
            if(!(categories.includes(cat))) categories.push(cat)

            // Sub Category Nodes
            if(!(root.descendants[dep].descendants[cat].descendants.hasOwnProperty(subCat))) 
            root.descendants[dep].descendants[cat].descendants[subCat] = new Node(subCat)
            if(!(subCategories.includes(subCat))) subCategories.push(subCat)

            // Type Nodes
            if(!(root.descendants[dep].descendants[cat].descendants[subCat].descendants.hasOwnProperty(type))) 
            root.descendants[dep].descendants[cat].descendants[subCat].descendants[type] = new Node(type)
            if(!(types.includes(type))) types.push(type)

            // Product Leaf
            root.descendants[dep].descendants[cat].descendants[subCat].descendants[type].descendants[x.Id] = new Leaf(x.Name, x.Description__c, x.Quantity__c, x.Unit_Price__c, this.surChargeRates[dep])
        }

        this.data.map(createAndAttachNodes)

        return { root, departments, categories, subCategories, types }
    }
}