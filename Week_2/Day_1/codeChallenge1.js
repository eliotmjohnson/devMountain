let arr = [1, 4, 11, 2, 12, 2, -4]

let answer = false
for(let i = 0; i < arr.length; i++){
    for(let x = 0; x < arr.length; x++){
        if (i !== x) {
            if(arr[x] + arr[i] === 0){
                answer = true
            }    
        }
    }
} return console.log(answer)


function calculate(){
    return 78
} 

console.log(calculate())
console.log(test())