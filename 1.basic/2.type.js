let foo = "i am a string."
foo ='So am I'
foo = `back tick`

foo = 'He said,"javascipt is awesome"'//'안에 문자열을 쓸려면""을쓰자//
foo = "He said, \"javjascript is awesome\""
//number type
foo = 1
foo = 1.0

console.log(1 / 0)
console.log('a' / 1) // NaN: Not a Number

foo=1
console.log(isFinite(foo))//변수안에있는 데이터 타입을 리턴한다.
foo= 'a'
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo) + 1) //paraseInt 는 숫자값을 가지게해준다.리턴값의type은number이다.

foo = 'a'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '123456-7890123'
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))
console.log(parseFloat(foo))  //실수값을 얻을떄 사용한다.

let a = Infinity * 2
let b = NaN * 2

a = Infinity * NaN
console.log(a,b)

foo = 1n  //big int  2**53 -1 초과
//boolean type
const okay = true
const fail = false

let val = null

let val2
console.log(val2)
val2 = undefined
//Symbol  ,typeof 연산자로 리턴한 값은 string이다.
let id = Symbol('id')
console.log(typeof id)

val = 1
val = String(val)
console.log(typeof val)

val = '6'/ '2'
console.log(val)

val = false / true
console.log(val)
//number  리턴값을 number로 바꾼다,
val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'),Number(true))
console.log(Number(' '), Number(''),Number(null),Number(false))
console.log(Number('a'),Number(undefined),Number(NaN))
//Boolean 값이 있다 true 없다 false
console.log(Boolean(-1),Boolean('a'),Boolean('0'),Boolean(' '))
console.log(Boolean(0),Boolean(''),Boolean(null),Boolean(undefined),Boolean(NaN))
