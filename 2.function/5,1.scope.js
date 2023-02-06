// global scope
let a
a = 1
a = 2

/* 스크립트를 실행하면 글로벌객체가 하나 생성
스크립트를 실행하면  이론상 lexical Envionment 라는 객체가 생성
블럭을 실행하면 그블럭에해당하는 lexical Envionment 가 생성된다.
lexical Envionment를 Environment Record라고한다.
let a 를햇을떄 Environment Record라부르는 글로벌 객체가생성되고 
a라는 프로퍼티가 생성되고 값은정해지지않는다.
두번째줄 a가 읽히면 a는 undefined 가할당되고  = 1이 읽히면
a는 1이된다.
*/
