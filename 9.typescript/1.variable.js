let msg = 'hello'; // ts는 변수의 타입을 정한다.(static variable type)
// mgs = 1  버그를 예방할 수 있으나 코드가 더러워진다.(js는 dynamic type)
let val = 1;
let nullableStr = null; //uion type
nullableStr = 'Hi';
// nullableStr = undefined
let undefinedOrNumber;
undefinedOrNumber = 10;
undefinedOrNumber = undefined;
let numberOfStringOrNull = null;
numberOfStringOrNull = 1;
numberOfStringOrNull = 'Bye';
let isCompleted = true;
isCompleted = false;
// isCompleted = 0
let anyValue = null;
anyValue = undefined;
anyValue = 1;
anyValue = 'hello';
let a = 1;
let b = 'b';
let c = true;

//ECMAscript6