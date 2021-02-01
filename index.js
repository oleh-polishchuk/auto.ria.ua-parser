const { chromium } = require('playwright');
const { scrapData } = require("./selectors");
const googleSpreadsheetService = require('./google-spreadsheet-service');
const envService = require('./env-service');

(async () => {
    const document = await googleSpreadsheetService.bootstrap()

    const browser = await chromium.launch({
        headless: envService.isProduction(),
        slowMo: envService.isProduction() ? 0 : 50
    });
    const page = await browser.newPage()

    const rows = await googleSpreadsheetService.getRows(document)
    for (const row of rows) {
        if (row.isChecked !== 'TRUE') {
            console.log(`=> Processing row #${row._rowNumber} with href: ${row.href}`)
            await page.goto(row.href)
            const data = await scrapData(page)
            await googleSpreadsheetService.updateRow(row, data)
        }
    }

    await browser.close();
})();
