import XLSX from 'xlsx';

export function getExcelData(path) {
    const workbook = XLSX.readFile(path);
    const sheet = workbook.Sheets['Sheet1'];

    const data = XLSX.utils.sheet_to_json(sheet); // converts to objects
    return data;
}