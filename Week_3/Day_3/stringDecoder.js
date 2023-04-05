// const decoder = (code) => {
//     let stringSplit = code.split("");
//     let newString = "";
// 	let numbers = [0, 1, 2, 3, 4, 5, 6];
// 	for (let i = 0; i < stringSplit.length; i++) {
// 		for (let j = 0; j < numbers.length; j++) {
// 			if (stringSplit[i] === numbers[j]) {
// 				console.log(stringSplit[i], numbers[j]);
// 			}
// 		}
// 	}
// };

// console.log(decoder("0h2xce5ngbrdy"));

const decoder = code => {
    let splitStr = code.split('')
    let result = ''
  
    for (let i = 0; i < splitStr.length; i++) {
      if (!isNaN(+splitStr[i])) {
        i += +splitStr[i]
      } else {
        result += splitStr[i]
      }
    }
  
    return result
  }
  
 console.log(decoder('0y4akjfe0s'))
 console.log(decoder('0h2xce5ngbrdy'))
 console.log(decoder('2bna0p1mp2osl0e'))