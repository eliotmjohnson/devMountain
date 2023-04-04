// let arr = [1, 4, 11, 2, 37, -4]
// //         0  1   2   3  4   5
// let smallest = arr[0]
// let largest = arr[0]

// for(let i = 0; i < arr.length; i++){
//     // console.log(arr[i])
//     console.log("================================")
//     console.log(`The current value at index ${i} is ${arr[i]}`)

//     if(arr[i] < smallest){
//         console.log(`${arr[i]} is smaller than ${smallest}`)
//         smallest = arr[i]
//         console.log(`The new smallest value in arr [${arr}] is ${smallest}`)
//     } else if (arr[i] > largest){
//         console.log(`${arr[i]} is larger than ${largest}`)
//         largest = arr[i]
//         console.log(`The new largest value in arr [${arr}] is ${largest}`)
//     }
// }
// console.log("================================")
// console.log(`Inside the arr [${arr}], the largest value is ${largest}, and the smallest value is ${smallest}`)

let numArray = [1, 4, 11, 2, 37, -4]
let smallest = numArray[0]
let largest = numArray[0]
for(let i = 0; i < numArray.length; i++){
    // console.log(`The current value at index ${i} is ${numArray[i]}`)

    if(numArray[i] < smallest){
        // console.log(`${numArray[i]} is smaller than ${smallest}`)
        smallest = numArray[i]
        // console.log(`the new smallest value in [${numArray}] is ${smallest}`)
        } else if (numArray[i] > largest){
            // console.log(`${numArray[i]} is larger than ${largest}`)
            largest = numArray[i]
            // console.log(`The new largest value in arr [${numArray}] is ${largest}`)
        }
} 
console.log(`${smallest} is smallest in Array [${numArray}]`)
console.log(`${largest} is largest in Array [${numArray}]`)

let guessMe = 45

while (guessMe < 100) {
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log(guessMe)
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log(guessMe)
    } else {
        guessMe += 3
        console.log(guessMe)
    }
    guessMe += 22
} console.log(guessMe)