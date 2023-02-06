let makeUser = function(userName, age) {
    return {
        userName: userName,
        age: age
    }
}

makeUser = function(userName, age) {
    return {
        userName,
        age
    }
}

console.log(makeUser('doris', 57))
// 생성자 첫글자는 대문자, 명사로 만든다.
function User(userName) {
    //this = {}  new를 쓰면 자동 추가
    this.userName = userName
    this.greet = () => console.log(`I am ${this.userName}.`)
    //return this new를 쓰면 자동 추가
}

let user1 = User('bob') // 생성자로 인식을안해서 값이안담긴다.
user1 = new User('bob')

console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet() 

let str = String(1)
console.log(typeof str)

str = new String(1)
console.log(typeof str)

let human = new function() {
    this.humanName = 'meg'
    this.age = 27
}

console.log(typeof human, human.humanName)

function BigUser() {
    this.userName = 'amy'
    return {userName: 'beth'}
}

function SmallUser() {
    this.userName = 'lorie'
}

// 과제: SmallUer().uerName 을 고쳐서 error 가 발생하지 않도록 하라.
console.log(BigUser().userName, SmallUser()?.userName)

const user = new Object()
console.log(user)
user.age = 12

// view object
const person = Object.create(user)
console.log(person)
console.log(person.age)
console.log(person == user) // person을 통해 user를 바라볼뿐 같지는않다.

person.personName = 'mandarin'
console.log(user)


