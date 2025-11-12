const ExcelJs = require('exceljs');
const { test, expect } = require('@playwright/test');

async function writeExcelTest(searchText, replaceText, change, filepath) {

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filepath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcelTest(worksheet, searchText);
    const cell = worksheet.getCell(output.row, output.column + change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filepath);
}

async function readExcelTest(worksheet, searchText) {

    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output.row = rowNumber;
                output.column = colNumber;
            }
        });
    });
    return output;
}

test('upload download excel validation', async ({ page }) => {
    const textSearch = "Mango";
    const updateValue = 350;
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    // 🔹 Step 1: Navigate to the webpage

    const downloadPromise = page.waitForEvent('download');
    // 🔹 Step 2: Tell Playwright to wait until a download starts  
    // (creates a promise for the next download event)

    await page.getByRole('button', { name: 'Download' }).click();
    // 🔹 Step 3: Click the “Download” button — this triggers the download event

    const download = await downloadPromise;
    // 🔹 Step 4: Wait for the promise to resolve → now we have the downloaded file object

    const filepath = 'C:/Users/AnupamPatel/Downloads/download.xlsx';
    // 🔹 Step 5: Define where to save the file on your system

    await download.saveAs(filepath);
    // 🔹 Step 6: Save the downloaded Excel file to your chosen path
    await writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, "C:/Users/AnupamPatel/Downloads/download.xlsx");
    await page.locator('#fileinput').click();

    // setInputFiles() → Simulates selecting a file from your system and uploads it to the <input type="file"> element
    await page.locator('#fileinput').setInputFiles('C:/Users/AnupamPatel/Downloads/download.xlsx')
    
    const textLocator = page.getByText(textSearch);
    const desiredRow = page.getByRole('row').filter({ has: textLocator });
    await expect(desiredRow.locator('//div[@id="cell-4-undefined"]')).toContainText(updateValue.toString());
});