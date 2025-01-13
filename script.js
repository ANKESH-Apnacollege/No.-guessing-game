// Initialize variables
let number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// DOM Elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const refreshButton = document.getElementById("refreshButton");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

// Event listener for the guess button
guessButton.addEventListener("click", () => {
    const guess = Number(guessInput.value);
    attempts++;

    // Validate input
    if (!guess || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    // Check the guess
    if (guess > number) {
        feedback.textContent = "Enter a smaller number.";
    } else if (guess < number) {
        feedback.textContent = "Enter a bigger number.";
    } else {
        feedback.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
        guessButton.disabled = true; // Disable button after winning
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = ""; // Clear input field
});

// Event listener for the refresh button
refreshButton.addEventListener("click", () => {
    number = Math.floor(Math.random() * 100) + 1; // Reset the number
    attempts = 0; // Reset attempts
    feedback.textContent = ""; // Clear feedback
    attemptsDisplay.textContent = ""; // Clear attempts
    guessInput.value = ""; // Clear input field
    guessButton.disabled = false; // Enable guess button
});

