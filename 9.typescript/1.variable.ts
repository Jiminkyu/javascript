let msg: string = 'hello'// ts는 변수의 타입을 정한다.(static variable type)
// msg = 1  버그를 예방할 수 있으나 코드가 더러워진다.(js는 dynamic type)

let val: number = 1
let nullableStr: string | null = null  //uion type
nullableStr = 'Hi'
// nullableStr = undefined

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOfStringOrNull: number | string | null = null
numberOfStringOrNull = 1
numberOfStringOrNull = 'Bye'

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0

let anyValue: any = null
anyValue = undefined
anyValue = 1
anyValue = 'hello'

let a = 1
let b = 'b'
let c = true

