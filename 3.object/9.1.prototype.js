let animal = {
    isAlive: true
}// isAlive라는 속성을가진 animal객체가 생성된다.

function Rabbit(rabbitName) {
    this.rabbitName = rabbitName
}// 생성자 function에는 prototype이 생긴다.
// constructor 속성을가진 객체가생성되고 Rabbit과 연결된다.

console.log(Rabbit.prototype)

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)

Rabbit.prototype = animal
console.log(Rabbit.prototype)

//function객체는 prototype을 가지고잇다.
rabbit = new Rabbit('white')
console.log(rabbit.isAlive)