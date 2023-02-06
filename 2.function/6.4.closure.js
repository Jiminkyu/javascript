function makeCounter() {
    let count = 0

    return function() {
        return ++count
    }
}

let counter1 = makeCounter()
let counter2 = makeCounter()

for(let i = 0; i < 2; i++)
    console.log(counter1())

for(let i = 0; i < 2; i++)
    console.log(counter2())    

//closure 외부에잇는변수를 참조할수잇는 함수