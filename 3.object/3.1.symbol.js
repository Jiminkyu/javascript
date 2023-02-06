/* symbol: unique identifier */
let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')
//symbol 안에 담기는값은 유일한값이다. 
console.log(id, id1, id2)

console.log(id1 == id2) // false

console.log(id.toString())
console.log(typeof id)

console.log(id1.description, id2.description, id.description)

let user = {
    userName: 'neo'
}

let userId = Symbol('userId')
user.userId = 1
user[userId] = 2

console.log(user)

// 과제: user 를 iterating 해서, key 들을 출력하라.
for(let key in user) console.log(key)

console.log(Object.keys(user))

id1 = Symbol.for('regMo')// id가 key id1 가value
id2 = Symbol.for('regNo')
console.log(id1 == id2) // true

let key = Symbol.keyFor(id1)
console.log(key, typeof key)

id1 = Symbol.for('regNo') // global symbol   'regNo' 는 key
id2 = Symbol('regNo') // local symbol  'regNo'는 discription
console.log(id1 == id2) // false

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))