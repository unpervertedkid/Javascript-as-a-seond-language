function doSomething() {
    console.log('Something');
}

//Explicit type coercion
if (true) {
    doSomething();
}

//Implicit type coercion
if (1) {
    doSomething();
}

if ('true') {
    doSomething();
}

if('false') {
    doSomething();
}

if (Boolean('false')) {
    doSomething();
}

let recipeName;
recipeName = null;
recipeName = '';

function startCooking(recipeName) {
    console.log('Cooking ' + recipeName);
}

if (recipeName) {
    startCooking(recipeName);
}