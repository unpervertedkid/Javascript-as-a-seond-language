//1. Use
//Using var keyword
var medicine = "Cough Syrup";
var medicine = "Paracetamol";
medicine = "Ibuprofen";
console.log(medicine);

//Using let keyword
let medicine1 = "Cough Syrup";
//let medicine1 = "Paracetamol"; //Cannot be redeclared
medicine1 = "Ibuprofen";
console.log(medicine1);

//Using const keyword
const medicine2 = "Cough Syrup";
//const medicine2 = "Paracetamol"; //Cannot be redeclared
//medicine2 = "Ibuprofen"; //Cannot be reassigned
console.log(medicine2);

//2. Scope
//Using var keyword
//Global scope
var medicine3 = "Cough Syrup";
console.log(medicine3);

//Function scope
function getMedicine() {
    var medicine3 = "Paracetamol";
    console.log(medicine3);
}
getMedicine();

//Block scope
if (true) {
    var medicine3 = "Ibuprofen";
    console.log(medicine3);
}
console.log(medicine3);

//Using let keyword
//Block scope - Inside functions, if statements, loops, etc. - Anywhere you use curly braces
function doExperiment() {
    let medicine4 = "Cough Syrup";
    if (medicine4 === "Cough Syrup") {
        let medicine4 = "Paracetamol";
        console.log(medicine4);
    }
}
doExperiment();

//3. Hoisting
var temp = 86;

 tempc();

 console.log(temp);

 function tempc() {
        console.log(temp);
        var temp = 50;
        temp = (temp - 32)  / 1.8;
        console.log(temp);
 }

 /*
 Output:
    undefined
    86
    10

Explanation:
    The variable temp in the global scope is initialized to 86.
    The function tempc() is called before it is defined.
    The function is hoisted to the top of the scope.
    Inside the function, when trying to log the value of temp, because of hoisting, the variable temp is initialized to undefined.
    The value of temp is then changed to 50.
    The value of temp then is changed to 10.
    Then we print the value of temp in the global scope, which is still 86.

  */



