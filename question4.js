/*
Write a function that takes in an array of strings, and converts them all 
into snake case 
(ex. (['Dogs are cute', 'Cats aRe also cute']) ---> ['dogs_are_cute', 'cats_are_also_cute']) notice the 
lowercase letters, and underscores connecting the words. 
return the entire array with the converted strings
*/
const snakeCaseArr = function (arr) {
    // your code here. 

    // set the final array
    let allSnaked = [];

    for (let i = 0; i < arr.length; i++) {

        //make all letters lowercase
        let lowerCase = arr[i].toLowerCase();

        //split string into indivisual word
        let words = lowerCase.split(' ');

        // combine all separated words
        let joinedWords = words.join('_');

        // push each snaked elements to the final array
        allSnaked.push(joinedWords);
        
    }

    // return the final array
    return allSnaked;

}

// console.log((snakeCaseArr(['Coding Is Fun']) === ['coding_is_fun']) ? "Test 1: Passing" : "Test 1: Failing");

// console.log((snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']) === ['coding_is_fun', 'dogs_are_cool']) ? "Test 2: Passing" : "Test 2: Failing");

// console.log((snakeCaseArr(['cats are CUTE', 'Dogs ARE cool']) === ['cats_are_cute', 'dogs_are_cool']) ? "Test 3: Passing" : "Test 3: Failing");

console.log(snakeCaseArr(['Coding Is Fun']));
console.log(snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']));
console.log(snakeCaseArr(['cats are CUTE', 'Dogs ARE cool']));