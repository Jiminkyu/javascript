const age = 16

function init() {
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}

init()

/*
글로벌 le가생성되고 age와 init변수가생성이된다.
값은 16과 함수값이 생성되고
다음으로 또다른 le가생성되고 
age, saAge, tellAge가생성된다.
10, 함수, 함수 값을가진다.
sayAge()가실행되면 새로운 le가형성되고 
sayAge의 함수값인 console.log(age)를 읽어 10을 출력한다.
출력한뒤에 le는사라진다. 이것이 closure 이다.
*/