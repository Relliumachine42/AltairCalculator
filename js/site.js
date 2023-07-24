function add() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    let sum = firstNumber + secondNumber;
    document.getElementById('results').innerHTML = sum;
}
function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    let difference = firstNumber - secondNumber;
    document.getElementById('results').innerHTML = difference;
}
function multiply() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    let product = firstNumber * secondNumber;
    document.getElementById('results').innerHTML = product;
}
function divide() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    let quotient = firstNumber / secondNumber;
    if (secondNumber == 0) {
        quotient = 'Cannot divide by zero'
    }
    document.getElementById('results').innerHTML = quotient;
}
function sumAll() {
    let numberArray = document.getElementById('numberSeries').value.split('');
    let sumSeries = 0;
    for (let i = 0; i < numberArray.length; i++) {
        let numberAsString = numberArray[i];
        let number = parseInt(numberAsString);
        sumSeries += number;
    }
    document.getElementById('results').innerHTML = sumSeries;
}
function multAll() {
    let numberArray = document.getElementById('numberSeries').value.split('');
    let multSeries = 1;
    for (let i = 0; i < numberArray.length; i++) {
        let number = parseInt(numberArray[i]);
        multSeries = multSeries * number;
    }
    document.getElementById('results').innerHTML = multSeries;
}
function min() {
    let numberArray = document.getElementById('numberSeries').value.split('');
    let minSeries = numberArray[0];
    for (let i = 1; i < numberArray.length; i++) {
        let number = parseInt(numberArray[i]);
        if (number < minSeries) {
            minSeries = number;
        }
    }
    document.getElementById('results').innerHTML = minSeries;
}
function max() {
    let numberArray = document.getElementById('numberSeries').value.split('');
    let maxSeries = numberArray[0];
    for (let i = 1; i < numberArray.length; i++) {
        let number = parseInt(numberArray[i]);
        if (number > maxSeries) {
            maxSeries = number;
        }
    }
    document.getElementById('results').innerHTML = maxSeries;
}
function average() {
    let numberArray = document.getElementById('numberSeries').value.split('');
    let meanSeriesPre = 0;
    for (let i = 0; i < numberArray.length; i++) {
        let number = parseInt(numberArray[i]);
        meanSeriesPre += number;
    }
   let meanSeries = meanSeriesPre / numberArray.length;
    document.getElementById('results').innerHTML = meanSeries;
}