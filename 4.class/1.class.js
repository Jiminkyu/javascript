class User {
    constructor(userName) {
        this.userName = userName
    }

    sayHi() {
        console.log(`Hi, I am ${this.userName}.`)
    }
}

let user = new User('john')
console.log(user.userName)
user.sayHi()
// class 는 생성자와 다르게 new없이 사용이 불가하다.
// User('john') 

class Animal {
    constructor() {
        this.animalName = 'animal'
    }

    run() {
        console.log(`${this.animalName} run.`)
    }

    stop() {
        console.log(`${this.animalName} stop.`)
    }
}

let animal = new Animal()
console.log(animal.animalName)
animal.run()
animal.stop()

function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi()