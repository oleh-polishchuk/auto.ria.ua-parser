require('dotenv').config()
const creds = require('./config/ace-destination-303319-15a5ab3961c8.json');
const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.bootstrap = async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    return doc;
}

exports.getRows = async (doc) => {
    const sheet = doc.sheetsByIndex[0];
    return sheet.getRows();
}

exports.updateRow = async (row, data) => {
    row.isChecked = 'true'
    for (const key of Object.keys(data)) {
        row[key] = data[key]
    }
    await row.save()
}
