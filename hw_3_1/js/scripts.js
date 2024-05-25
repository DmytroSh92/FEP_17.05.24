const stringType = "stringType";
const numberType = 42;
const bigintType = 9007199254740991n;
const booleanType = true;
const undefinedType = undefined;
const nullType = null;
const objectType = { name: "Alice", age: 30 };
const arrayType = [1, 2, 3, 4, 5];
const functionType = function() { return "function"; };
const symbolType = Symbol('symbol');


console.log(`stringType: ${typeof stringType}`);
console.log(`numberType: ${typeof numberType}`);
console.log(`bigintType: ${typeof bigintType}`);
console.log(`booleanType: ${typeof booleanType}`);
console.log(`undefinedType: ${typeof undefinedType}`);
console.log(`nullType: ${typeof nullType}`);
console.log(`objectType: ${typeof objectType}`);
console.log(`arrayType: ${typeof arrayType}`);
console.log(`functionType: ${typeof functionType}`);
console.log(`symbolType: ${typeof symbolType}`);