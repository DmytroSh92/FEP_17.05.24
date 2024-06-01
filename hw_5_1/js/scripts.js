let numbers = "";
for(let i = 20; i <= 30; i += 0.5) {
    numbers += i;
    if(i === 30) {
        break;
    }
    numbers += " ";
}

console.log(numbers);