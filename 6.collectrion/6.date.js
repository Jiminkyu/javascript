console.log(Date())
console.log(typeof Date())

let date = new Date()
console.log(date)
console.log(typeof date)
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())

// UTC 시각 이므로 한국시간보다 9시간 빠르다.
// 그러므로 toLocalTimeString 으로 변환하면 9시간이 더해지게된다.
date = new Date('2023-02-10T01:37:30.999Z')
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getUTCHours(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
    date.getDay()
)

console.log(date.getTime())
console.log(Date.now())

date = new Date(0)
console.log(date)

date = new Date(1000 * 60 * 60 * 24)
console.log(date)

date = new Date(-1000 * 60 * 60 * 24)
console.log(date)