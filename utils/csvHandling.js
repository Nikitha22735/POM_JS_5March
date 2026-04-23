import fs from 'fs';
import { parse } from 'csv-parse/sync';

export function getCSVData(path) {
    const file = fs.readFileSync(path);

    const records = parse(file, {
        columns: true,   // converts to object
        skip_empty_lines: true
    });

    return records;
}