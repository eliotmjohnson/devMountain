let backpack = []

backpack.push('jacket', 'water bottle', 'snack', 'sunglasses')

let jacket = backpack.splice(0,1)

// let inventory = backpack.slice()

let fannyPack = backpack.splice(0, 2)

// console.log(fannyPack)

backpack.unshift('coolstick', 'shiny rock')

// console.log(backpack)
let sunglasses = 0
for(let i = 0; i < backpack.length; i++){
    // console.log(backpack[i])
    if(backpack[i] === 'sunglasses'){
        sunglasses = backpack.splice(i,1)
    }
}

// console.log(sunglasses)
// console.log(backpack)

inHand= fannyPack.pop()

// console.log(inHand)

let arr = [123,32454657,223,234353,3463632,234234, 14]

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0 && arr[i] < 1000000){
        console.log(arr[i])
    }
}

let nums = [1,2,3,4,5,6]
let slice = nums.slice(0,3)
nums.shift() && nums.pop()
nums.unshift('bruh') && nums.push('sick')
nums.splice(2,1,'this')
nums.splice(3,1,'is')
nums.splice(4,1,'so')
console.log(nums)