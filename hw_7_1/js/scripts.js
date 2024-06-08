function calculate(number) {
    let result = 0;
    function plus(number) {
        return result += number;
    }

    return plus;
}

let sum = calculate();
console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));