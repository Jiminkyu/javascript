let a = 1
//let a

{
    console.log(a)
}// 이시점에서 이블럭은 죽는다.

{  // local scope
    let a = 2
    // let a
    console.log(a)
}

console.log(a)// 실행되고나면 글로벌객체는죽는다.

/*
새로운 블럭당 새로운 le가생성된다.
*/