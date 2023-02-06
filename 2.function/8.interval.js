let timeId = setInterval(() => console.log('tick'), 1000)

setTimeout(() => {
    clearInterval(timeId)
    console.log('stop')
}, 3000)
//setInterval은  멈추는 기능이없다.
//setTimeout은 잇다.