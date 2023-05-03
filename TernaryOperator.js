let answer;

answer = window.prompt("What is the capital of the Kenya?");

checkAnswer(answer);

function checkAnswer(answer) {
    answer = (typeof answer !== 'undefined') ? answer.toLowerCase() : '';

    if (answer === 'nairobi') {
        window.alert('Correct!');
    } else {
        window.alert('Incorrect!');
    }
}

let ship = document.querySelector('#ship');
ship.src = 'images/ship.svg';
ship.style.width = '50px';

let leftPosition = ship.offsetLeft;
let topPosition = ship.offsetTop;

window.addEventListener("keydown", function (event) {
    event.key === 'ArrowUp' ? ship.style.marginTop = (topPosition -= 5) + 'px' : null;
    event.key === 'ArrowDown' ? ship.style.marginTop = (topPosition += 5) + 'px' :
    event.key === 'ArrowLeft' ? ship.style.marginLeft = (leftPosition -= 5) + 'px' :
    event.key === 'ArrowRight' ? ship.style.marginLeft = (leftPosition += 5) + 'px' : null;

}, true);
