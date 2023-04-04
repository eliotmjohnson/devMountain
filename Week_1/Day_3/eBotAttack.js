let bot1Health = 100
let bot2Health = 100
let Sword1 = 20
let Sword2 = 20

bot1Health = bot1Health - Sword1

console.log(`The bots go at it and bot 2 strikes bot 1 with his sword leaving him at ${bot1Health} health`)

bot2Health = bot2Health - Sword2

console.log(`Bot 1 fierce with rage strikes Bot 2 with his sword leaving him at ${bot2Health} health`)

let fire = 5

let armor = 20

console.log(`Bot 2 then throws fire at Bot 1 burning him to ${bot1Health - 5} health`)

for(i = bot1Health - 10; i >= 50; i -= 5){
    console.log(`then ${i} health`)
}

let healthPotion = 25

console.log(`Bot 1 sees he is at ${i + 5} health and frantically drinks 2 health potions to put him back to ${i = (i + 5) + (healthPotion * 2)} health`)

bot1Health = i

for(i = bot2Health - 20; i >= 0 ; i -= 20){
    if(i === 0){
        console.log(`Then Bot 1 unleashes one final blow to Bot 2 leaving him at ${i} health and bot 2 then falls to his knees and surrenders valiantly`)
    } else if (i === 40){
        console.log('Bot 2 then attempts to block a second sword attack from Bot 1 but is unsuccessful')
    } else if (i === 20){
        console.log(`Bot 1 again slashes Bot 2 with his sword leaving him at a devastating ${i} health`)
    } else {console.log(`Bot 1 then furiously slashes Bot 2 with his quick sword leaving him at ${i} health`)}
}