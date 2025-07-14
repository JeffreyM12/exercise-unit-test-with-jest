    const { fromDollarToYen,fromEuroToDollar,fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {


    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1.07 dollar should be 156.5 yen", function() {
    
    const yen = fromDollarToYen(1.07);
    // This is the comparison for the unit test
     expect(yen).toBe(156.5);
})

test("156.5 yen should be 0.87 pound", function() {
    
    const pound = fromYenToPound(156.5);
    // This is the comparison for the unit test
    console.log(pound, "pound value");
     expect(pound).toBe(0.87);
})