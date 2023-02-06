//외부에잇는 자원을 이용할수있는 함수
const age = 16
console.log(sayAge)

{
    let age = 10

    function sayAge(){
        console.log(age)
    }

    let tellAge = function() {
         console.log(age)
    }

    sayAge()
    tellAge()
}

sayAge()
/*
le 가생성되고 age와 sayAge변수가생기고 2번쨰줄을읽어서 
age는 16이되고 4번째줄을읽을때는 sayAge는 값이없으므로 undefined가출력된다.
6번째줄이실행될때 새로운 le가생성되고 맨처음 le의 주소값을갖는다.
closure 변수는 sayAge와 tellAge이다.
*/