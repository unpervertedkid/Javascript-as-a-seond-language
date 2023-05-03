let myLovePromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('I love you!');
    }, 4000);
});

myLovePromise.then((value) => {
    console.log(value);
});

//Fetching data from a server
let myServerPromise = new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.onload = () => {
        if (request.status === 200) {
            resolve(request.response);
        } else {
            reject(Error(request.statusText));
        }
    };
    request.send()
});

myServerPromise.then(
    (users) => {
        console.log('Success: ' + users);
    },
    (error) => {
        console.log('Error: ' + error);
    }
);

//Chaining promises
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

//Using then to chain promises
promise1
    .then(value => {
        console.log(value);
        return promise2;
    })
    .then(value => {
        console.log(value);
        return promise3;
    })
    .then(value => {
        console.log(value);
    });


