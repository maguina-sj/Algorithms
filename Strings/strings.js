var funStr = "Emma shreds on her electric cello";
console.log(typeof funStr); // "string"
var oneChar = funStr[26]; // "c"
console.log(typeof oneChar); // "string"

console.log(funStr.length); // 33
console.log("".length); // 0

wordArray = funStr.split(" "); 
console.log(wordArray)
// Note: " " never appears in result: 
// [ "Emma", "shreds", "on", "her",
// "electric", "cello" ]
console.log(wordArray [5].split("")); 
// Split on every letter:
// [ "c", "e", "l", "l", "o" ]  

console.log(wordArray.join()); 
// Note: "," is used by default:
// "Emma,shreds,on,her,electric,cello"
console.log(wordArray.join("-")); 
// Param "-" inserted between words:
// "Emma-shreds-on-her-electric-cello"
console.log(wordArray.join("")); 
// "Emmashredsonherelectriccello"

function removeBlanks(str) {
    wordArray = str.split(" ");
    console.log(wordArray.join(""));
}
removeBlanks('I caNT believe ITS not BUTTER')

// function getDigits (str) {
//     wordArray = str.split("");
//     console.log(wordArray)
//     newArray = []
//     for (i =0; i >=wordArray.length; i++) {
//         isNaN(wordArray[i]) ?
//         wordArray.pop([i])
//         :
//         newArray.push([i])
//         console.log(newArray)
//     }
// }


function getDigits (str) {
    console.log(str.replace(/\D/g, ''))
}

getDigits('1dli35nonis2534')

function acr(str){
    let words, acronym, nextWord;

    words = str.split(' ');
    acronym= "";
    index = 0
    while (index < words.length) {
            nextWord = words[index];
            acronym = acronym + nextWord.charAt(0);
            index = index + 1 ;
    }
    console.log(acronym.toUpperCase())
}

acr('Live from New York, its Saturday night!')

function countNonSpaces (str) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ')
            count++;
}
console.log(count)
}
countNonSpaces('hello world')

function removeShorterStrings(arr, len) {
    let newArr = [];
    let nextIndex = 0;
    for(let val in arr) {
        if(arr[val].length >= len) {
            newArr[nextIndex++] = arr[val]
        }
    }
    return newArr
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))