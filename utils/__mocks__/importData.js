import { promises } from 'fs'

import { parse } from 'csv-parse/sync'

export const importData = async () => {
    // Read the content
    const content = await promises.readFile(__dirname+'/mock_fees.csv')

    // Return the parsed CSV content
    return parse(content, {
        columns: true, 
        skip_empty_lines: true,
        bom: true
    })
}
