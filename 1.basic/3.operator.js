let val = 1 + 2 * 3 / 2
console.log(val, 5 % 2,4 ** 2,4 **(1/2))

let i = 1
console.log(++i,i++)

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)
console.log(1 + '2', '1' + '2')//피연산자중 한개가 string이면 붙히기다.

console.log(1 + + '2')//string type에 + + 를쓰면 합쳐진다.
//마지막으로 읽은값을 리턴한다., foo && A논리
console.log(1 || 0, 0 || 1)
console.log(1 && 0, 0 && 1)
console.log(1 && 2, 2 && 1)



//bar = baz || createBar()

console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *=2
console.log(d)
//비교연산자.
console.log()
console.log('2' > 1,'01' == 1, false == 0,'0' == 0, ''==false)
console.log(true > 1)

console.log(1 == '1', 1 != '1') //equivalent
console.log(1 === '1', 1 != '1')//===은 data type까지 챙긴다.,identical

console.log('z' > 'a','ac' > 'ab','bee' > 'be','a' > 'A')
//null >=0 만 true값이 나온다.
console.log(null > 0, null >= 0, null == 0)
console.log(undefined > 0, undefined >= 0, undefined == 0)
console.log(NaN > 0 , NaN >= 0, NaN ==0)


console.log(undefined == undefined, null == null, NaN ==NaN)

a == b 
a == 1
1 == a