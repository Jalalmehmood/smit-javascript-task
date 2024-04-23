// Function to check if a string is a palindrome
function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
    const reversed = input.split('').reverse().join(''); // Reverse the string
    const isPalindrome = input === reversed;
    const result = isPalindrome ? 'Yes, it is a palindrome.' : 'No, it is not a palindrome.';
    document.getElementById('palindromeResult').textContent = result;
}

// Function to find minimum and maximum numbers from an array
function findMinMax() {
    const input = document.getElementById('numbersInput').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    document.getElementById('minMaxResult').textContent =` Minimum: ${min}, Maximum: ${max}`;
}

// Function to find the missing number from a series of numbers
function findMissingNumber() {
    const input = document.getElementById('missingInput').value;
    const numbers = input.split(',').map(num => parseInt(num.trim()));
    let missing = null;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i + 1] - numbers[i] > 1) {
            missing = numbers[i] + 1;
            break;
        }
    }
    document.getElementById('missingResult').textContent =` Missing number: ${missing}`;
}

// Attach event listeners to buttons
document.getElementById('palindromeButton').addEventListener('click', checkPalindrome);
document.getElementById('minMaxButton').addEventListener('click', findMinMax);
document.getElementById('missingButton').addEventListener('click', findMissingNumber);