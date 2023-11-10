// var nicknameButton = document.getElementById("NicknameButton");
// var startButton = document.querySelector(".start"); // Adjust the selector based on your actual button class or ID

// // Disable the start button initially
// startButton.disabled = true;

// nicknameButton.onclick = function() {
//     let nickname = prompt("Please enter your nickname:");

//     while (!nickname) {
//         nickname = prompt("Nickname is required. Please enter your nickname:");
//     }

//     // Store the nickname in sessionStorage
//     sessionStorage.setItem("nickname", nickname);
//     console.log("Nickname: " + nickname);

//     // Enable the start button after a valid nickname is entered
//     startButton.disabled = false;
// };
// let forwhat=sessionStorage.getItem('nickname')
// // Function to handle the start button click
// startButton.onclick = function() {
  
//   // Check if nickname is not present in sessionStorage
//   if (!sessionStorage.getItem("nickname")) {
//   alert("Nickname is required. Please enter your nickname before starting.");

//   // Redirect to the nickname entry page (replace 'index.html' with your actual file name)
//   window.location.href = "entername.html";
// }
// // else{
// //     window.location.href='game.html'
// //   }
  
// //   if(forwhat!==''){

// //   console.log(forwhat)
// //   window.location.href="game.html"
// // }

//     // You can add your logic for navigating to the game page or any other functionality here

// };
var nicknameButton = document.getElementById("NicknameButton");
var startButton = document.querySelector(".start"); // Adjust the selector based on your actual button class or ID

// Disable the start button initially
startButton.disabled = true;

nicknameButton.onclick = function() {
    let nickname = prompt("Please enter your nickname:");

    while (!nickname) {
        nickname = prompt("Nickname is required. Please enter your nickname:");
    }

    // Store the nickname in sessionStorage
    sessionStorage.setItem("nickname", nickname);
    console.log("Nickname: " + nickname);

    // Enable the start button after a valid nickname is entered
    startButton.disabled = false;
};

// Function to handle the start button click
startButton.onclick = function() {
    // Check if nickname is not present in sessionStorage
    if (!sessionStorage.getItem("nickname")) {
        alert("Nickname is required. Please enter your nickname before starting.");

        // Redirect to the nickname entry page (replace 'index.html' with your actual file name)
        window.location.href = "entername.html";
    } else {
        // Redirect to the game page if a valid nickname is present
        window.location.href = "game.html";
    }
};
