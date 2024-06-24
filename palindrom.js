function isPalindrome(word) {
   
    let lowerCaseString = word.toLowerCase();
    
   
    let reversedString = lowerCaseString.split('').reverse().join('');
    

    return { original: lowerCaseString, reversed: reversedString };
}


let { original, reversed } = isPalindrome('Noon');


if (original === reversed) {
    console.log("It is a palindrome. The word is:", original);
} else {
    console.log("It is not a palindrome.");
}
