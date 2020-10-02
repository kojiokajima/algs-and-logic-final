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

    //make all letters lowercase
    let lowerCase = str.toLowerCase();
    // console.log(lowerCase);

    //split string into indivisual word
    let words = lowerCase.split(' ');
    // console.log(words);
    // words = ['conding', 'is', 'fun']

    for (let i = 0; i < words.length; i++) {
        //make the first letter uppercase
        let chars = words[i].split('');
        // console.log(chars);
        

        chars[0] = chars[0].toUpperCase();
        let joinedChars = chars.join('');
        // console.log(joinedChars);

        words[i] = joinedChars;
    }

    //put everything in one string
    return words.join('-');
}

// console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

// console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

// console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");


console.log(kebabCase('Coding Is Fun'));
