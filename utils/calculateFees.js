import { Tree } from "../classes/Tree.js"
import { importData } from "./importData.js"

const SUR_CHARGE_RATES = {
    Marketing: ['add', 10],
    Sales: ['add', 15],
    Development: ['add', 20],
    Operations: ['sub', 15],
    Support: ['sub', 5]
}

export const calculateFees = async (args) => {
    const checkCriteria = {departments: [], categories: [], subCategories: [], types: []}
    const records = await importData()
    let targetNode = ''

    const {root, departments, categories, subCategories, types} = new Tree(records, SUR_CHARGE_RATES).buildTree()

    departments.map(i => {
        (new RegExp(`\\b${i}\\b`, "i").test(args)) && checkCriteria.departments.push(i)
    })

    if (checkCriteria.departments.length > 1) console.log('You can only calculate the fees of one given node on the same level at a time. Please specify only one department.')
    else if (checkCriteria.departments.length < 1) console.log('Please specify a node to calculate its fees, starting from its department')
    else {
        categories.map(i => {
            (new RegExp(`\\b${i}\\b`, "i").test(args)) && checkCriteria.categories.push(i)
        })

        if (checkCriteria.categories.length > 1) console.log('You can only calculate the fees of one given node on the same level at a time. Please specify only one category.')
        else if (checkCriteria.categories.length < 1) targetNode = root.descendants[checkCriteria.departments[0]]
        else {
            subCategories.map(i => {
                (new RegExp(`\\b${i}\\b`, "i").test(args)) && checkCriteria.subCategories.push(i)
            })

            if (checkCriteria.subCategories.length > 1) console.log('You can only calculate the fees of one given node on the same level at a time. Please specify only one sub category.')
            else if (checkCriteria.subCategories.length < 1) 
            targetNode = root.descendants[checkCriteria.departments[0]].descendants[checkCriteria.categories[0]]
            else {
                types.map(i => {
                    (new RegExp(`\\b${i}\\b`, "i").test(args)) && checkCriteria.types.push(i)
                })

                if (checkCriteria.types.length > 1) console.log('You can only calculate the fees of one given node on the same level at a time. Please specify only one type.')
                else if (checkCriteria.types.length < 1) 
                targetNode = root.descendants[checkCriteria.departments[0]].descendants[checkCriteria.categories[0]].descendants[checkCriteria.subCategories[0]]
                else 
                targetNode = root.descendants[checkCriteria.departments[0]].descendants[checkCriteria.categories[0]].descendants[checkCriteria.subCategories[0]].descendants[checkCriteria.types[0]]
            }
        }
    }

    if (targetNode !== undefined && targetNode !== '') console.log(Math.round(targetNode.fee()))
    else if(targetNode !== '') console.log('Please confirm that the heirachy you have specified for your target node is correct')
}