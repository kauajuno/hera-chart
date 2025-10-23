const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

function generateYearData(year) {
    const data = [];
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31); 
    
    let currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
        const dateStr = currentDate.toISOString().split('T')[0];
        
        const value = faker.number.int({ min: 50, max: 500 });
        
        data.push({
            date: dateStr,
            value: value
        });
        
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return data;
}

function generateAllFiles() {
    for (let year = 2016; year <= 2025; year++) {
        const data = generateYearData(year);
        const fileName = `public/docs/${year}-data.ts`;
        const fileContent = `export const data = ${JSON.stringify(data, null, 2)};`;
        
        fs.writeFileSync(fileName, fileContent);
        console.log(`Generated ${fileName} with ${data.length} entries`);
    }
}

// Run the generator
generateAllFiles();
console.log('All data files generated successfully!');