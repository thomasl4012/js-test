const assert = require('assert');


// Find the longest word in a sentence :

function longestWord (string) {
   
}

assert.equal(longestWord('The quick brown fox jumps over the lazy dog'), 5);
assert.equal(longestWord('Google do a barrel roll'), 6);
assert.equal(longestWord('What is the average airspeed velocity of an unladen swallow'), 8);


/**Mutation :

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.**/


// function mutation(arr) {

// }

// assert.equal(mutation(["hello", "Hello"]), true);
// assert.equal(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]), true);
// assert.equal(mutation(["Mary", "Army"]), true);
// assert.equal(mutation(["Mary", "Aarmy"]), true);
// assert.equal(mutation(["Alien", "line"]), true);
// assert.equal(mutation(["floor", "for"]), true);
// assert.equal(mutation(["hello", "neo"]), false);
// assert.equal(mutation(["voodoo", "no"]), false);
// assert.equal(mutation(["ate", "date"]), false);


/**Sum all numbers in range :

Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.**/

//  function sumInRange(arr) {

//  }


// assert.equal(sumInRange([1, 4]), 10);
// assert.equal(sumInRange([4, 1]), 10);
// assert.equal(sumInRange([5, 10]), 45);
// assert.equal(sumInRange([10, 5]), 45);