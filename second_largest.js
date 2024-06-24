let mylist = [1,4,6,2,7,9,4,12,5,6]
let uniqueArray = [...new Set(mylist)]
uniqueArray.sort((a, b) => a - b);
let lengthOlist = uniqueArray.length
console.log('the second largest number is: ',uniqueArray[lengthOlist-2])