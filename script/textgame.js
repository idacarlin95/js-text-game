const wordList = ["chile", "china", "haiti", "india", "italy", "japan", "malta", "nepal", "qatar", "samoa", "spain", "syria", "tonga", "yemen", "nauru", "palau"];

const playGame = () => {
    const answer = wordList[Math.floor(Math.random() * wordList.length)];
    const maxAttempts = 6;
    let attempts = 0;
    let running = true;
    let guesses = [];

    console.log(`Answer is: ${answer} (but this is cheating!)`);

    while (running) {
        let historyString = guesses.length ? `\nPrevious Guesses:\n${guesses.join("\n")}\n` : "";

        let guess = window.prompt(`Guess a 5-letter country. Only use lower case letters!\n[ ]-correct letter and correct position\n( )-correct letter, wrong position (Attempt ${attempts + 1}/${maxAttempts}):${historyString}`);

        if (guess === null) {
            window.alert("Game canceled. Goodbye!");
            return;
        }

        guess = guess.toLowerCase();

        if (!guess || guess.length !== 5 || !wordList.includes(guess)) {
            window.alert("Is this really a country? Make sure you type 5 letters and a COUNTRY!");
            continue;
        }

        attempts++;

        let feedback = "";
        for (let i = 0; i < 5; i++) {
            if (guess[i] === answer[i]) {
                feedback += `[${guess[i].toUpperCase()}]`;
            } else if (answer.includes(guess[i])) {
                feedback += `(${guess[i]})`;
            } else {
                feedback += ` ${guess[i]} `;
            }
        }

        guesses.push(`${guess.toUpperCase()} -> ${feedback}`);


        if (guess === answer) {
            window.alert(`Oh happy day! You guessed the correct country "${answer}" in ${attempts} attempts.\n\nGuess History:\n${guesses.join("\n")}`);
            running = false;
        } else if (attempts >= maxAttempts) {
            window.alert(`Game over! The correct word was "${answer}".\n\nGuess History:\n${guesses.join("\n")}`);
            running = false;
        }
    }

    const playAgain = window.confirm("Do you want to play again?");
    if (playAgain) {
        playGame();
    } else {
        window.alert("Thanks for playing! See ya!")
    }
};


playGame();





