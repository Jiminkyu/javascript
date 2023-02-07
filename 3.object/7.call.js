let user1 = {
    userName: 'isabel',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

let user2 = {
    userName: 'jade',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

user1.greet()
user2.greet()

//
let userName = 'morpheus'

function greet() {
    console.log(`I am ${this.userName}.`)
}
// this엔 주어객체가 들어가지만 global객체는 들어가지않아서
// mopheus가 나오지않고 undefined가 나온다
/*global. 이생략되어잇다.*/greet()
// call매서드를쓰면 call매서드에들어가는 객체를 콜한다.
greet.call(user1)
greet.call(user2)

//
user2 = {
    userName: 'colin'
}

user1.greet()
//user2.greet()

// 과제: user1.greet을 이용해서, I am colin. 을 출력하라
user1.greet.call(user2)