// Event Handlers Module
import stringLibrary from './stringLibrary.js';

const reverseBtn = document.getElementById('reverseBtn');
const uppercaseBtn = document.getElementById('uppercaseBtn');
const lowercaseBtn = document.getElementById('lowercaseBtn');
const capitalizeBtn = document.getElementById('capitalizeBtn');
const inputString = document.getElementById('inputString');
const output = document.getElementById('output');

// Event Bubbling Example
document.getElementById('app').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        handleButtonClick(event.target.id);
    }
});

function handleButtonClick(buttonId) {
    const input = inputString.value;

    if (input) {
        let result = '';
        switch (buttonId) {
            case 'reverseBtn':
                result = stringLibrary.reverse(input);
                break;
            case 'uppercaseBtn':
                result = stringLibrary.toUpperCase(input);
                break;
            case 'lowercaseBtn':
                result = stringLibrary.toLowerCase(input);
                break;
            case 'capitalizeBtn':
                result = stringLibrary.capitalize(input);
                break;
        }
        output.textContent = `Result: ${result}`;
    } else {
        output.textContent = 'Please enter a string.';
    }
}
