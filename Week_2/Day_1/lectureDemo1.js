let fruitsArr = ['apple' , 'banana', 'cherry']

for(let i = 0; i < fruitsArr.length; i++){
    let fruit = fruitsArr[i]

    // console.log(fruit[0])

    fruit = fruit[0].toUpperCase() + fruit.slice(1)
    // console.log(fruit)
    // console.log(fruitsArr[i])
    fruitsArr[i] = fruit
}

console.log(fruitsArr)

// ================================

let nouns = ['fox', 'elephant', 'dog', 'cheeta', 'giraffe']
let adjectives = ['big', 'burly', 'mean', 'sweet', 'lovely']
let verbs = ['hops', 'runs', 'swims', 'jumps', 'skips']

// console.log(randInt)

const randomArrayValue = (arr) => {
    let randInt = Math.floor(Math.random() * arr.length)
    return arr[randInt]
}

// console.log(randomArrayValue(nouns))
// console.log(`${randomArrayValue(adjectives)} ${randomArrayValue(nouns)} ${randomArrayValue(verbs)}`)

let madLib = 'The y x z over the y x '
while(madLib.includes(' x ') || madLib.includes(' y ') || madLib.includes(' z ')){
    madLib = madLib.replace(' x ', ' ' + randomArrayValue(nouns) + ' ')
                .replace(' y ', ' ' + randomArrayValue(adjectives) + ' ')
                .replace(' z ', ' ' + randomArrayValue(verbs)+ ' ')
}
console.log(madLib)