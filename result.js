
// const storedNickname = sessionStorage.getItem("nickname");
// const storedScore = sessionStorage.getItem("score"); // Parse score as an integer
// console.log(storedScore)
// // Function to get a random phrase from an array
// function getRandomFromArray(array) {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
// }

// // Function to display a message based on the score
// function displayMessage() {
//     const scoreElement = document.querySelector(".score1");
//     const randomPhraseElement = document.querySelector("#randomPhrase");
//     const tagElement = document.querySelector(".tag");

//     if (storedScore < 30) {
//         // User has lost
//         const losingPhrases = [
//             "Better luck next time!",
//             "Don't give up!",
//             "Keep trying!",
//             "You'll get them next time!",
//             "It's okay, you can do better!",
//             "Keep practicing!"
//         ];
//         const losingPhrase = getRandomFromArray(losingPhrases);

//         scoreElement.innerText = `Score: ${storedScore}`;
//         randomPhraseElement.innerText = `Oops! ${storedNickname}, ${losingPhrase}`;
//         tagElement.innerText = losingPhrase;
//     } else {
//         // User has won
//         const winningPhrases = [
//             "Well done!",
//             "Congratulations!",
//             "You're a winner!",
//             "Fantastic job!",
//             "Incredible victory!",
//             "Amazing achievement!"
//         ];
//         const winningPhrase = getRandomFromArray(winningPhrases);

//         scoreElement.innerText = `Score: ${storedScore}`;
//         randomPhraseElement.innerText = `Hey ${storedNickname}, You Have Done It! ${winningPhrase}`;
//         tagElement.innerText = winningPhrase;
//     }
// }

// // Call the function to display the appropriate message
// displayMessage();




const storedNickname = sessionStorage.getItem("nickname");
const storedScore = sessionStorage.getItem("score"); // Parse score as an integer
console.log(storedScore)

// Function to get a random phrase from an array
function getRandomFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to display a message based on the score
function displayMessage() {
    const scoreElement = document.querySelector(".score1");
    const randomPhraseElement = document.querySelector("#randomPhrase");
    const tagElement = document.querySelector(".tag");

    if (storedScore < 30) {
        // User has lost
        const losingPhrases = [
            "Better luck next time!",
            "Don't give up!",
            "Keep trying!",
            "You'll get them next time!",
            "It's okay, you can do better!",
            "Keep practicing!"
        ];
        const losingPhrase = getRandomFromArray(losingPhrases);

        // Display losing message
        scoreElement.innerText = `Score: ${storedScore}`;
        randomPhraseElement.innerText = `Oops! ${storedNickname}, ${losingPhrase}`;
        tagElement.innerText = losingPhrase;
    } else {
        // User has won
        const winningPhrases = [
            "Well done!",
            "Congratulations!",
            "You're a winner!",
            "Fantastic job!",
            "Incredible victory!",
            "Amazing achievement!"
        ];
        const winningPhrase = getRandomFromArray(winningPhrases);

        // Display winning message
        scoreElement.innerText = `Score: ${storedScore}`;
        randomPhraseElement.innerText = `Hey ${storedNickname}, You Have Done It! ${winningPhrase}`;
        tagElement.innerText = winningPhrase;
    }
}

// Call the function to display the appropriate message
displayMessage();
