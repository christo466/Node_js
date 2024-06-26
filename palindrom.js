// Function to check if a given word is a palindrome
function isPalindrome(word) {
    // Convert the input word to lowercase to ensure case-insensitive comparison
    let lowerCaseString = word.toLowerCase();
    
    // Reverse the lowercase string
    let reversedString = lowerCaseString.split('').reverse().join('');
    
    // Return an object containing the original and reversed lowercase strings
    return { original: lowerCaseString, reversed: reversedString };
    
}

// Test the isPalindrome function with the word 'Noon'
let { original, reversed } = isPalindrome('Noon');
// Explanation:
    
// Check if the original and reversed strings are the same
if (original === reversed) {
    console.log("It is a palindrome. The word is:", original);
    
} else {
    console.log("It is not a palindrome.");
    
}
