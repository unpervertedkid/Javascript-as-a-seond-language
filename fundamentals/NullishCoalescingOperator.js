const pics =
    ['img/plain.svg','img/giggles.svg',
    'img/happy.svg', 'img/scared.svg',
    'img/silly.svg', 'img/surprised.svg']

function getLlama(llamaID) {
    /*
    llamaID = llamaID || Math.floor(Math.random() * pics.length);
    Using logical OR operator will always show a random picture at the start of the app
    because in js the truth value of 0, which is the index of the first picture, is false.
    Therefore, we use the nullish coalescing operator to check if the value of llamaID is null or undefined.
     */
    llamaID = llamaID ?? Math.floor(Math.random() * pics.length);

    document.querySelector('#llama').src = pics[llamaID];
}

document.querySelector('switchBtn').addEventListener('click', () => getLlama(), false);

getLlama(4);