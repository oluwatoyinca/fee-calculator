import { promises as fs } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { parse } from 'csv-parse/sync'

export const importData = async () => {
    // Read the content
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const content = await fs.readFile(__dirname+'/raw_fees.csv')

    // Return the parsed CSV content
    return parse(content, {
        columns: true, 
        skip_empty_lines: true,
        bom: true
    })
}
