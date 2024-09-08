// Task 1: Create a function to calculate average sales
function calculateAverageSales(salesFigures) {
    let totalSales = 0;
    for (let i = 0; i < salesFigures.length; i++) {
        totalSales += salesFigures[i];
    }
    let averageSales = totalSales / salesFigures.length;
    return averageSales;
}

// Test data to see average in console
let salesFigures = [4603,7893,5302,4958];
let averageSales = calculateAverageSales(salesFigures);
console.log(`The average for the sales figures was $${averageSales}.`);

