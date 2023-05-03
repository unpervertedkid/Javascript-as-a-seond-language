let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Success!');
    }, 2000);
});

async function myAsyncFunction() {
    console.log("Before Promise");
    let result = await myPromise;
    console.log(result);
    console.log("After Promise");
}

console.log("Before Async Function");
myAsyncFunction();
console.log("After Async Function");

//Performing multiple asynchronous operations
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('First');
    }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Second');
    }, 2000);
});

let promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Third');
    }, 3000);
});

async function run() {
    let result1 = await promise1;
    console.log(result1);

    let result2 = await promise2;
    console.log(result2);

    let result3 = await promise3;
    console.log(result3);
}

run()
    .then(() => {
        console.log('Done');
    });
