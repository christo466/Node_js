// Function to check if a string is a pangram
const pangram = (s) => {
    // Convert input string to lowercase and split into array of characters
    let lowerCaseString = s.toLowerCase().split('');

    // Define the alphabet string to check against
    let abcString = 'abcdefghijklmnopqrstuvwxyz';

    // Iterate through each letter of the alphabet
    for (let x of abcString) {
        // Check if the lowercase input string includes the current alphabet letter
        if (!lowerCaseString.includes(x)) {
            // If any letter is missing, return false (not a pangram)
            return false;
        }
    }
    
    // If all letters are found, return true (it is a pangram)
    return true;
}

// Example usage:
let result = pangram('The quick brown fox jumps over the lazy dog');

// Output the result based on whether it's a pangram or not
if (result) {
    console.log('It is a pangram');
} else {
    console.log('It is not a pangram');
}
