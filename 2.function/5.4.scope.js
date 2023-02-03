let userName = 'neo'
sayHi()

function sayHi() {
    console.log('Hi', userName)
}

sayHi()

sayHello()

const sayHello = function() {
    console.log('Hello,', userName)
}

sayHello()

/*
글로벌객체가 생성되고 프로퍼티로 userName= 언이니셜라이즈, sayHi = fun(),
sayHello = 언이니셜라이즈, 생성된다.
2번쨰줄에 sayHi()를실행하면 sayHi에잇는 fun()값을 읽어서 HI, neo를 출력한다.
10번째줄에 sayHello()를 실행하면 sayHello에 부여된 값이없기떄문에 에러가난다.
12번쨰줄이되야 sayHello 에 fun()값이 할당된다.
*/