/*
1.calculate.js 를 callback 으로 refactoring 하라.
-, *, / 연산을 callback으로 처리한다.
*/
let minus = function(a, b){
    return a - b
}

let multiply = function(a, b){
    return a * b
}

let  divide = function(a, b){
    return a / b
}

function calculate (a, b, op = multiply){
    return op(a, b)
}

console.log(calculate(1, 2))


