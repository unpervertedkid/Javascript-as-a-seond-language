//1. Passing arguments to functions
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];

//Without spread operator
console.log(sum(numbers[0], numbers[1], numbers[2]));

//With spread operator
console.log(sum(...numbers));

//2. Combining or copying arrays
const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'potato', 'broccoli'];

//Without spread operator
const food = fruits.concat(vegetables);

//With spread operator
const food1 = [...fruits, ...vegetables];


//3. Creating a new object using an existing object
const person = {name: "Brian", age: 22}
const job = {occupation: "Software Engineer", salary: 286000}

//Without spread operator
const employee = Object.assign(person, job);

//With spread operator
const employee1 = {...person, ...job};