// Write your code below

function hasUniqueChars(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    } return true      
}

// console.log(hasUniqueChars("Monday"));
// console.log(hasUniqueChars("alaska"))


function hasUniqueChars(word) {
    let uniqueChars = new Set(word.split(''));
    if(uniqueChars.size === word.length){
        return true
    } return false
}
 console.log(hasUniqueChars("Monday"))

let uniqueChars = word => new Set(word.split('')).size === word.length

console.log(uniqueChars("Monday"))