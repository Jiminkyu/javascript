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
}