// OOP CLASSES
// Four pillars of OOP: Encapsulation, Inheritance, Abstraction,Polymorphism

const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
    const newEnemy = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newEnemy
  }
  const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
    const newPlayer = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newPlayer
  }

  // Create an enemy
  
const ivana = createEnemy('Ivana', 10000, 'Freeze smile', 10000)
const anguel = createPlayer('Anguel', 20000, 'Super punch', 20000)

// console.log(ivana)
// console.log(anguel)

// Creating a class
// When creating names for our classes, we use Pascal casing- Pascal -capitilize the first letter of everyword
// Everything in JS follows camelCase

// Superclass or parent class
class Character {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.name = name
        this.age = age
        this.eyes = eyes
        this.hair = hair
        this.lovesCats = lovesCats 
        this.lovesDogs = lovesDogs || false
      }

      greet (otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
      }

      classyGreeting (otherClassyCharacter) {
        console.log (`Greetings ${otherClassyCharacter.name}!`)
      }

      setHair (hairColor) {
        this.hair. hairColor
      }
      
      smite () {
        console.log('I smite thee you vile person');
      }
}

const mina = new Character ()
const priyanka = new Character ()
const cathy = new Character ('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', false)
const stanley = new Character ('Stanley the Goat', 25, 'brown', 'green', false, false)

// console.log(mina)
// console.log(priyanka)
// console.log(cathy)

// mina.sayGreeting()
// priyanka.sayGreeting()

// mina.sayGoodbye()


// Altering properties of an instance

cathy.hair = 'supernova red'
// console.log('New Cathy Below')
// console.log(cathy)

priyanka.hairColor = 'black'
// console.log('New Priyanka Below')
// console.log(priyanka)

// Using an object to interact with other objects

// console.log(stanley)

// Make Cathy say hi to Stanley

// cathy.classyGreeting(stanley)

// Make Stanley say hi to Cathy

// stanley.classyGreeting(cathy)

// Inheritance - connects the subclass/child class to the superclass/parent class
// What we actually want to do to get the same functionality and use DRY principle

//subclass or child class
class SuperHero extends Character {
    //will error if super() is not included
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair)
        this.skills = [['thiervery', 'speed', 'willpower']]

    }
    fly () {
        console.log('Hey I am flying...WOOO!')
    }

    //Method overriding: needs to be the same exact name of the method from parent class
    greet (otherCharacter) {
        console.log(`Yo ${otherCharacter} my hair ${this.hair}.`)
    }

    smite () {
        // We use the reserved keyword super to access our parent class
        super.smite()
        this.fly()
    }
}

const julia = new SuperHero('Julia', 25, 'brown', 'blonde')
// console.log(julia)

// julia.fly()
// console.log(julia.legs)

// Can we access fly () using an instance of the parent class?
// Stanley is an instance of parent class so we dont have access to the fly() that lives inside SuperHero class

// stanley.fly()

// Polymorphism
// Method overriding

// Without method overriding 

// julia.greet('Marcus')

// Method override

// julia.greet('Serjay')

// An example
/*
-> makeNoise() -> 'RAWR'

class Dog extends Animal
->makeNoice() -> 'Woof Woof!'

class Cat extends Animal
->maleNoice() -> 'Meow!'
*/

// Calling the parent class inside the child class

// julia.smite()

// console.log(julia)

// julia.greet('Marcus')

// excerise/lab
class Men extends SuperHero {
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair)
        this.skills = [['Gear-second', 'Gear-4', 'Haki']]
    }

    stretch () {
        console.log(`Im ${this.name} and I am made of rubber ;)`)
    }

    greet() {
        console.log('Im gonna be the pirate king!')
    }
}

const luffy = new Men('Luffy', 19, 'black', 'black')
// console.log(luffy)
// luffy.stretch()
// luffy.greet()

class Men2 extends SuperHero {
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair)
        this.skills = [['Wado Ichimonji', 'Sanai Kitetsu', 'Enma']]
    }

    sword() {
        console.log(`Im ${this.name} gonna be worlds best swordsman`)
    }

    greet() {
        console.log('Im the luffys right hand man')
    }
}

const zoro = new Men2('Zoro', 21, 'black', 'green')
// console.log(zoro)
// zoro.sword()
// zoro.greet()

class Cook extends SuperHero {
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair)
        this.skills = [['Superhuman strength', 'speed', 'agility']]
    }

    cook() {
        console.log(`Hello beautiful Im ${this.name} and Im the strawhats cook`)
    }

    greet() {
        console.log('My dream is to visit the all blue')
    }
}

const sanji = new Cook('Sanji', 21, 'black', 'blonde')
// console.log(sanji)
// sanji.cook()
// sanji.greet()

// HomeWork Static Methods aand Properties

class Governor {
    static name = 'Jerry'
    static networth = '70,000,000'
    static power = 'laws' 
    static leadership = 'JerryLand'

    static greet() {
        console.log(`Hello I am ${this.name}`)
    }
} 
// when using Static dont use const instead use a variable 
// with Static you gotta put the value in the same line

// we not instantiating... Basically dont make a const with new Governer
// const president = new Governor ('Obama', 70,000,000, 'Presidency', 'Represents USA')

console.log (Governor)
Governor.greet()

class Person  {
    constructor (name, job, bills) {
        this.name = name 
        this.job = job 
        this.bills = bills
    }

    working () {
        console.log (`${this.name} is hard at work.`)
    }

    sleeping () {
        console.log (`${this.name} is tired from work and is now sleeping.`)
    }

    eating () {
        console.log (`${this.name} woke up to eat a bacon egg and cheese.`)
    }
}

const jerry = new Person ('Jerry', 'Software Engineer', 'House bills')

console.log (jerry)
jerry.working()
jerry.sleeping()
jerry.eating()

class PostalWorker extends Person {
    packages () {
        console.log (`${this.name} is delivering packages.`)
    }

    letters () {
        console.log (`${this.name} is packing out letters.`)
    }

    hideAway () {
        console.log (`${this.name} is hiding away to not do his job`)
    }
}

class Chef extends Person {
    cooking () {
        console.log (`${this.name} is the head cook of this resturant.`)
    }

    takeOrders () {
        console.log ('Chefs takes orders on what to cook for the customer.')
    }

    clean () {
        console.log ('The chef is responsible for cleaning his station in the resturant kitchen')
    }
}

const postalWorkerJay = new PostalWorker ('Jay', 'Postal Worker', 'House bills')
const chefKeem = new Chef ('Keem', 'Head Chef', 'House bills')

console.log (postalWorkerJay)
postalWorkerJay.packages ()
postalWorkerJay.letters ()
postalWorkerJay.hideAway ()

console.log (chefKeem)
chefKeem.cooking ()
chefKeem.takeOrders ()
chefKeem.clean ()

