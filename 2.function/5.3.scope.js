//greeting은 global scope
const greeting = 'hello'

//userName은 local scope
function say(userName) {
    console.log(greeting, userName)
}

say('john')

/*
le에 greeting 과 say라는 프로퍼티가 생성된다.
객체가 생성되는 시점에 greeting은 값을가지지않지만 say는 function()값을가지게된다.
새로태어난 le는 글로벌 객체의 주소값을 갖는다.
*/