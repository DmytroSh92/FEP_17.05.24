function avg(array) {
    let sum = 0;
    array = array.filter(value => typeof value === 'number' && !isNaN(value));
    array.forEach(value => sum += value);
    return sum / array.length;
}

let result = avg([6,2,"3",4,null, NaN, "", " ", undefined]);

console.log(result);
