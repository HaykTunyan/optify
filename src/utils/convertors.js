import xlsx from 'xlsx';
import { validators } from './validators';

// input sheet file, return array in cb function
export const sheetToArray = ({ file, cb }) => {
  let arr = [];
  const FR = new FileReader();
  FR.onload = function (e) {
    var data = new Uint8Array(e.target.result);
    var workbook = xlsx.read(data, { type: 'array' });
    var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    var result = xlsx.utils.sheet_to_json(firstSheet, { header: 1 });
    for (const item of result) {
      arr = [...arr, ...item.map((it) => it.toString().trim())];
    }
    const filteredArr = arr.filter((it) => it);
    cb(filteredArr);
  };
  FR.readAsArrayBuffer(file);
};

export const arrayToSheet = ({ array, t }) => {
  const ws = xlsx.utils.book_new();
  const fileName = `Result ${Date.now()}.xlsx`;
  const sheetName = 'Result';
  const sheetData = [];
  // add empty row with empty cells
  sheetData.push({ email: '', status: '' });
  //add array data
  for (const { email, isValid } of array) {
    sheetData.push({ email, status: isValid ? t('verified') : t('not_verified') });
  }
  ws.SheetNames.push(sheetName);
  ws.Sheets[sheetName] = xlsx.utils.json_to_sheet(sheetData);
  // set cols width
  ws.Sheets[sheetName]['!cols'] = [{ wpx: 200 }, { wpx: 150 }];
  // write into file
  xlsx.writeFile(ws, fileName);
};

export const csvToArray = ({ csv }) => {
  const sanitazedCSV = csv.replace(/\s/g, ',');
  const arr = sanitazedCSV.split(/[ ,]+/).filter((em) => em && !validators.whitespace.test(em));
  return arr;
};

const convert = {
  sheetToArray,
  csvToArray,
  arrayToSheet,
};

export default convert;
