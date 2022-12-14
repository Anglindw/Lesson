/*
const day = new Date().getDay()
console.log(day)
const literal_date = new Date().toDateString()
console.log(literal_date)

switch(day){
    case 1:
        console.log('it monday')
        break;
    
}
*/
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for (let key in person3){
    console.log(key, person3[key])
}

//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printInfo = () => {
        return `${this.name} is ${this.age} years old.`
    }
    addAge = (add) => {
        this.age += add
    }
}

const person1 =  new Person('Duncan', 24)
const person2 = new Person('Jack', 35)
console.log(person1.printInfo())
console.log(person2.printInfo())

console.log(person1.addAge(5))
console.log(person1.printInfo())
// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const comp = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 10){
                resolve('Big Word')
            } else{
                reject('Small Number')
            }
        }, 4000)
    })
}

const checker = async (num) => {
    const response = await comp(num)
    console.log(response)
}

checker(11)
