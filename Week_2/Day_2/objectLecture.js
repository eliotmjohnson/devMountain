let eliot = {
    gender: 'Male',
    weight: 'Heavy',
}
for(let x in eliot){
    // console.log(`Eliot is ${eliot[x]}`)
}

// console.log(`Eliot is ${eliot["gender"]}`)

let myBot = {
    name: "st4n",
    health: 100,
    attack: 25,
}
let {health} = myBot
// console.log(health)
// console.log(myBot.name)
for(let x in myBot){
    // console.log(`the ${x} value of myBot is ${myBot[x]}`)
}

class Bot{
    constructor(name, health, attack){
        this.name = name
        this.health = health
        this.attack = attack
    }
    takeDamage(damage){
        if( this.health - damage < 0){
            console.log(`${this.name} has been destroyed`)
        } else {
            this.health = this.health - damage
            console.log(`${this.name} has taken ${damage} damage, and their health is now ${this.health} `)
        }
    }
    repair(){
        this.health += 30
        console.log(`${this.name} has repaired itself and its health is now ${this.health}`)
    }
}

let ph1l = new Bot('ph1l', 100, 20)
let b1ll = new Bot('b1ll', 120, 10)

// b1ll.takeDamage(ph1l.attack)
// b1ll.takeDamage(ph1l.attack)
// b1ll.takeDamage(ph1l.attack)
// b1ll.takeDamage(ph1l.attack)

// ph1l.takeDamage(b1ll.attack)
// ph1l.takeDamage(b1ll.attack)
// ph1l.takeDamage(b1ll.attack)
// ph1l.takeDamage(b1ll.attack)
// ph1l.repair()

// console.log(ph1l)
// console.log(b1ll)

class ShieldBot extends Bot{
    constructor(name, health, attack, shield){
        super(name, health, attack)
        this.shield = shield
    }
    takeDamageShield(damage){
        if(this.health - (damage - this.shield) <= 0){
            console.log(`${this.name} has been destroyed`)
        } else{
            this.health = this.health - (damage - this.shield)
            console.log(`${this.name} has taken ${damage - this.shield} damage, and their health is now ${this.health}`)
        }
    }
}

let defenseBot = new ShieldBot('h4r0ld', 120, 15, 10)

let defBotAttack = defenseBot.attack
let ph1lAttack = ph1l.attack
let b1llAttack = b1ll.attack

defenseBot.takeDamage(b1llAttack)
defenseBot.takeDamage(ph1lAttack)
defenseBot.takeDamageShield(b1llAttack)
defenseBot.takeDamageShield(ph1lAttack)