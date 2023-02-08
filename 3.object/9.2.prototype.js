let obj = {}//new object 생성자를 짧게 줄여쓴것.

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

obj = new Object()
console.log(obj.__proto__)
console.log(Object.prototype.__proto__)

console.log(obj.toString())

let arr1 = [1,2]
let arr2 = new Array(1,2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)
//Array의 속성이없으면 object로 된다.
console.log(Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)
console.log(arr2.toString())

let one = new Number(1)
console.log(one.toString())

function User() {}
let user = new User()
console.log(user.toString())
console.log(obj.toString())