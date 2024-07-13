class Calculator {
    add(fDigit, sDigit){
        return fDigit + sDigit;
    }
    subtract(fDigit, sDigit){
        return fDigit - sDigit;
    }
    multiply(fDigit, sDigit){
        return fDigit * sDigit;
    }
    divide(fDigit, sDigit){
        return fDigit / sDigit;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));

console.log(calc.subtract(10, 4));

console.log(calc.multiply(3, 6));

console.log(calc.divide(8, 2));