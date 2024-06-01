let number = parseInt(prompt("Enter a number:"));

let isPrime = true;

if(number <= 1) {
    isPrime = false;
}else if (number % 2 === 0) {
    isPrime = (number === 2);
} else {
    let d = 3;
    while (d * d <= number) {
        if (number % d === 0) {
            isPrime = false;
            break;
        }
        d += 2;
    }
}

if(isPrime) {
    console.log(`${number} - просте число`)
} else {
    console.log(`${number} - не просте число`)
}