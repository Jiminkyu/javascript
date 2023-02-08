/*
3.object/hom/4.jajangmyeon.js 를 class 로 refactoring 하라.
*/
class Food {
    constructor(taste, foodName) {
        this.taste = taste
        this.foodName = foodName  
    }   

    [Symbol.toPrimitive](){
        return `${this.taste} ${this.foodName}`
    }
}

class Chef {
    constructor(taste){
        this.cook = foodName => new Food(taste, foodName)
    }
}

class Waiter {
    order(foodName, chef){
        return chef.cook(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()
    
console.log(waiter.order('짜장면', chef1))
console.log(`${waiter.order('짬뽕', chef2)}`)