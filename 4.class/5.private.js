class CoffeMachine {
    #waterAmount

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeMachine.prototype)

let machine = new CoffeMachine
console.log(machine)

machine.waterAmount = 1
console.log(machine.waterAmount)

//private field 는 게터와 세터로만 할당할수잇다.
//machine.#waterAmount = 1