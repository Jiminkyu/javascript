/**
 * 2.function/home/3.jajangmyeon.js 를 객체지향으로 refactoring 하라.
 */
{// 모법 답안
function Food(taste, foodName) {
    this.taste = taste
    this.foodName = foodName
}

function Chef(taste) {
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName)
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

console.log(waiter.order('짜장면', chef1))
console.log(waiter.order('짬뽕', chef2))
}
// 내 답안
{
function Food(foodName) {
    this.foodName = foodName
}

function Chef(savor) {
    this.cook = foodName =>  new Food(savor + ' ' + foodName)
}

function Waiter() { 
    this.serve = (chef, food) => chef.cook(food)
}

const chef1 = new Chef('달콤한')
const chef2 = new Chef('매운')
const waiter = new Waiter()

console.log(waiter.serve(chef1, '짜장면'))
console.log(waiter.serve(chef2, '짜장면'))
console.log(waiter.serve(chef2, '짬뽕'))
}



