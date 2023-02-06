function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000)
//sayTimeout(a, b) a를 bms후에 콜한다.
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId)