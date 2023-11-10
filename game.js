



sessionStorage.setItem("gg", "h");

let bgm=new Audio('bgm.mp3')
bgm.play()
// Select the game elements
var body = document.querySelector(".game-body");
var player = document.getElementById("player");
var bubble_id = 0;
var scoreElement = document.getElementById("scores");
var score = 0;
var timeLeft = 60;
var timer = document.getElementById("timer");

// Initialize the timer and score display
timer.innerText = timeLeft;
scoreElement.innerText = score;

// Function to generate a random number within a range
function randomnum(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

// Function to create a falling bubble
function makebubble() {
    var newBubble = document.createElement("img");
    newBubble.src = `bubbles${randomnum(1, 2)}-png.png`;
    newBubble.className = "falling-image";
    newBubble.id = `bubble${bubble_id}`;
    newBubble.style.transform = `translateX(${randomnum(20, 80)}vw)`;
    body.appendChild(newBubble);

    // Event listener for bubble click
    newBubble.addEventListener("click", function () {
        destroy(newBubble);
        score++;
        console.log(score);
        scoreElement.innerText = score;
        sessionStorage.setItem("points", score);
    });

    bubble_id++;
}

// Event listener for document load
document.addEventListener("DOMContentLoaded", function (shailesh) {
    // Your existing code
    // Get the score value from an element and store it in localStorage
    var newscore = document.querySelector(".score").innerText;
    localStorage.setItem("Score", newscore);
});

// Function to remove a bubble
function destroy(bubble) {
    body.removeChild(bubble);
}

// Main game loop
setInterval(function () {
    timeLeft--;
    timer.innerText = timeLeft;

    // Redirect to result.html when time is up
    if (timeLeft === 0) {
        window.location.href = "result.html";
    }

    // Create a new bubble in the game loop
    makebubble();
    checkCollision();
    moveElement(0, 0);
}, 1000);

// Player movement variables
let x = 0;
let y = 0;
let speed = 60;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// Event listener for keydown events
document.addEventListener("keydown", function (e) {
    // Move player based on arrow key pressed
    if (e.keyCode === 37) {
        if (x > 0) {
            x -= speed;
            player.style.left = x + 'px';
            player.style.transform = 'rotate(0deg)';
        }
    } else if (e.keyCode === 38) {
        if (y > 0) {
            y -= speed;
            player.style.top = y + 'px';
            player.style.transform = 'rotate(90deg)';
        }
    } else if (e.keyCode === 39) {
        if (x + 100 < windowWidth) {
            x += speed;
            player.style.left = x + 'px';
            player.style.transform = 'rotate(180deg)';
        }
    } else if (e.keyCode === 40) {
        if (y + 100 < windowHeight) {
            y += speed;
            player.style.top = y + 'px';
            player.style.transform = 'rotate(-90deg)';
        }
    }
});

// Initial call to the makebubble function
makebubble();

// Function to move the player element
function moveElement(dx, dy) {
    var rect = player.getBoundingClientRect();
    var newX = rect.left + dx;
    var newY = rect.top + dy;

    // Check for boundary conditions
    if (newX >= 0 && newX + rect.width <= window.innerWidth) {
        player.style.left = newX + "px";
    }

    if (newY >= 0 && newY + rect.height <= window.innerHeight) {
        player.style.top = newY + "px";
    }

    // Check for collisions after moving
    checkCollision();
}


let pop=new Audio('pop.mp3')
// Function to check for collisions with falling bubbles
function checkCollision() {
    const playerRect = player.getBoundingClientRect();

    // Check collisions for each falling bubble
    document.querySelectorAll(".falling-image").forEach(function (bubble) {
        const bubbleRect = bubble.getBoundingClientRect();

        if (
            playerRect.left <= bubbleRect.right &&
            playerRect.right >= bubbleRect.left + 10 &&
            playerRect.top - 10 <= bubbleRect.bottom &&
            playerRect.bottom >= bubbleRect.top
        ) {
            // Collision detected, hide the bubble
            bubble.style.display = "none";
            score++;
            pop.pause()
            pop.currentTime=0;
            pop.play()
            
            // Store the score in sessionStorage and update the score display
            sessionStorage.setItem('score', score);
            scoreElement.innerText = score;
        }
    });
}

// Check for collisions at regular intervals
setInterval(() => {
    checkCollision();
}, 50);
