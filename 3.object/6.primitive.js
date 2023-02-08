// serializing
let date1 = new Date(2023, 2, 7)
let date2 = new Date(2023, 2, 6)

console.log(date1 - date2)

let user = {
    userName: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) {// []는 symbol 타입을 나타낸때쓴다. 
        return hint == 'string' ? this.userName : this.age
    } //신버전이고 1순위로 읽는다.
}

let user2 = {
    age: 30,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(user)
console.log(`${user}`)
console.log(user > user2)
console.log(user + 50)
console.log(user2 + 50)

user = {
    userName: 'neo',
    age: 11,
    toString() {//구버전이고 2순위로읽는다
        return this.userName
    }
}

console.log(user + '')

user.valueOf = function() {// 구버전
    return this.age
}
console.log(user + 100)

//
userStr = JSON.stringify(user) // ()안의 객체를 JSON형태의 문자로 바꾼다
console.log(userStr)
console.log(typeof userStr)