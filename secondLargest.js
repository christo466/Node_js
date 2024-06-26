// Step 1: Initialize the array with some numbers, including duplicates
let mylist = [1, 4, 6, 2, 7, 9, 4, 12, 5, 6];


// Step 2: Remove duplicates by creating a Set from the array, then convert it back to an array
let uniqueArray = [...new Set(mylist)];


console.log('Unique Array after removing duplicates:', uniqueArray); // Optional debug log to check the unique array

// Step 3: Sort the array of unique numbers in ascending order
uniqueArray.sort((a, b) => a - b);


console.log('Unique Array after sorting:', uniqueArray); 

// Step 4: Get the length of the sorted unique array
let lengthOlist = uniqueArray.length;


console.log('Length of Unique Array:', lengthOlist); // Optional debug log to check the length of the unique array

// Step 5: Print the second largest number in the sorted unique array
console.log('The second largest number is:', uniqueArray[lengthOlist - 2]);


