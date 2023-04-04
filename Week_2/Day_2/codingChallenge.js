function randNumArr(num){
    if(num > 10){
        num = 10
    } else if(num < 1) {
        num = 1
    } else num = num
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let newArr = []
    for(i = 0; i < num; i++){
        let x = Math.floor(Math.random() * arr.length)
        newArr.push(arr[x])
        arr.splice(x, 1)
    } return newArr
}

// console.log(randNumArr(7))

// console.log(Math.floor(Math.random() * 4))

let arr = [1,2,3,3,3,1,2,5,6,7,7,7]
console.log(new Set(arr))

const luckySet = (num) => {
    let set = new Set()
    while(set.size < num){
        let randInt = Math.ceil(Math.random() * 10)
        console.log(`Our current set: ${[...set]}, our current randInt: ${randInt}`)
        set.add(randInt)
    }
    let numArr = [...set]
    return numArr
}

console.log(luckySet(8))