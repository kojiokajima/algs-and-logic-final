/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    // your code here

    //if str is not an empty string
    if (str != '') {

        //make all letters lowercase
        let lowerCase = str.toLowerCase();
    
        //split string into indivisual word
        let words = lowerCase.split(' ');
    
        for (let i = 0; i < words.length; i++) {
            //slpit each words into characters
            let chars = words[i].split('');
            
            //make the first letter uppercase
            chars[0] = chars[0].toUpperCase();

            // combine all separated characters
            let joinedChars = chars.join('');
            
            // replace each words
            words[i] = joinedChars;
        }
    
        //put everything in one string and return it
        return words.join('-');
    } else {
        // if str is an empty string, return a certain string
        return 'This is an empty string!';
    }
}

// console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

// console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

// console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");


console.log(kebabCase('Coding Is Fun'));
console.log((kebabCase('this STrIng has Weird casing')));
console.log((kebabCase('')));
