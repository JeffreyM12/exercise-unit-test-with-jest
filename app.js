// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}



const fromDollarToYen = function(valueInDollar){
    let euro = valueInDollar/oneEuroIs.USD
    let valueInYen = Math.round(euro * 100)/100;
    return valueInYen * oneEuroIs.JPY
}

const fromYenToPound = function(valueInYen){
    let euro = valueInYen/oneEuroIs.JPY
    let valueInPound = Math.round(euro * 100)/100;
    return valueInPound * oneEuroIs.GBP
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }