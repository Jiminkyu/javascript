let user = {
    userName: 'leo'
}

function greet() {
    console.log(`I am ${this.userName}.`)
}

greet()
// call은 앞의 주어 function을 콜하고
// bind은 앞의 주어 function을 리턴한다.
let fn = greet.bind(user)
fn()

setTimeout(fn, 100)


user = {
    userName: 'john',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

// fn 에 user.greet 을 할당하라.
//       greet의 this 엔 user가 담겨 있다.
fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet)

