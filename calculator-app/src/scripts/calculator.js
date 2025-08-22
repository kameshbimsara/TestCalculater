// calculator.js

// Function to update the display
function updateDisplay(value) {
    const display = document.getElementById('display');
    display.value = value;
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.innerText;
    const display = document.getElementById('display');

    if (buttonValue === 'C') {
        updateDisplay('');
    } else if (buttonValue === '=') {
        try {
            updateDisplay(eval(display.value));
        } catch (error) {
            updateDisplay('Error');
        }
    } else {
        updateDisplay(display.value + buttonValue);
    }
}

// Add event listeners to buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});