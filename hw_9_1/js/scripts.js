let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};


function sumSalaries(obj) {
    let sum = 0;

    if(Array.isArray(obj)) {
        for (let item of obj){
            sum += sumSalaries(item);
        }
    } else if(typeof obj === 'object'){
        for (let key in obj) {
            let temp = obj[key];
            sum += sumSalaries(temp);
        }
    } else if(!isNaN(obj)) {
        sum += obj;
    }
    return sum;
}

let result= sumSalaries(company);
console.log(result)