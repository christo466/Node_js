// Function to calculate the frequency of each character in a string
const freq = (s) => {
    // Convert the input string to lowercase and split into an array of characters
    let lowerCaseString = s.toLowerCase().split('');

    // Create a new Set from the array to get unique characters
    let setNew = new Set(lowerCaseString);

    // Initialize an empty object to store character frequencies
    let myDict = {};

    // Iterate through each unique character in the Set
    for (let element of setNew) {
        // Initialize a counter for the current character
        let count = 0;

        // Count occurrences of the current character in the original array
        for (let i = 0; i < lowerCaseString.length; i++) {
            if (element === lowerCaseString[i]) {
                count += 1;
            }
        }

        // Store the character and its frequency in the dictionary
        myDict[element] = count;
    }

    // Return the dictionary containing character frequencies
    return myDict;
}

// Example usage:
let myDict = freq('cricket');
console.log(myDict); // Output: { c: 1, r: 1, i: 1, c: 1, k: 1, e: 1, t: 1 }
