function userDialog() {
    let countOfIteration = getRandomInt(3, 10);
    for(let i = 0; i < countOfIteration; i++) {
        let userNumber = prompt("Enter a number greater than 100:")

        if(isNotNumber(userNumber)) {
            console.log(`Not valid value ${userNumber}`);
        } else if(userNumber < 100) {
            console.log(`Not valid number ${userNumber}. Enter a number greater than 100`);
        } else if(userNumber > 100) {
            console.log(userNumber);
            break;
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function isNotNumber(value) {
    return isNaN(value) || value === null || value.trim() === "";
}

userDialog();
