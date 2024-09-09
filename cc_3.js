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
let salesFigures = [4603,7893,5302,8958,9000];
let averageSales = calculateAverageSales(salesFigures);
console.log(`The average for the sales figures was $${averageSales}.`);

// Task 2: Create a function to determine performance rating using if/else if/else
function determinePerformanceRating (rating) {
    if (averageSales >= 10000) {
        console.log("Excellent");
    }
        else if (averageSales >= 7000 && averageSales < 10000) {
            console.log("Good");
        }
        else if (averageSales >= 4000 && averageSales < 7000) {
            console.log("Satisfactory");
        } 
        else {
            console.log("Needs improvement");       
    }
    return rating;
}

// Call function
let displayRating = determinePerformanceRating(salesFigures);

// Task 3: Create a function to identify top and bottom performers
function findTopAndBottomPerformers (total) {
    const salesData = [
        {"name" : "Alice", "sales" : [12000,15000,13000]}, 
        {"name" : "Bob", "sales" : [7000,6000,7500]},
        {"name" : "Charlie", "sales" : [3000,4000,3500]},
        {"name" : "Diana", "sales" : [9000,8500,9200]}
    ];
    for (let index = 0; index < salesData.length; index++) {
        salesData[index].total = salesData[index].sales.reduce((total,sale) => total + sale,0);
    }
    salesData.sort((a,b) => a.totals - b.totals);
    // the data is sorted from lowest to highest, so the bottom is first(index of 0) and top is last
    let topPerformer = salesData[salesData.length-1].name;
    let bottomPerformer = salesData[0].name;
    return {topPerformer, bottomPerformer};
}

// Call function and log top/bottom into console
let displayTopAndBottom = findTopAndBottomPerformers();
console.log(`Top performer: ${displayTopAndBottom.topPerformer}`);
console.log(`Bottom performer: ${displayTopAndBottom.bottomPerformer}`);

