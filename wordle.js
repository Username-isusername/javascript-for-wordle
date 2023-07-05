const wordList = ["apple", "paper", "melon", "zebra", "books", "cheap" , "word1", "word2", "word3"];

function startGame(round) {
    let attempt = 0;
    while (_______) {
        let currentGuess = prompt("______");

        if (isInputCorrect(currentGuess)) {
            console.log(currentGuess);
            attempt = attempt + 1;
        } else {
            retry(currentGuess);
        }
    }
}

function isInputCorrect(____) {

    return ____.includes(____);
}

function retry(word) {

    alert(`${word} ____________`);
}

startGame(____);
