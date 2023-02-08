/*
다음 상속 관계로 객체를 디자인하라.
<life>
name
eat()
excrete()


<animal>
name
move()

<bird>         <mammal>
name            name
move()          move()
--

실행코드
bird.eat()
bird.excrete()
bird.move()

mammal.eat()
mammal.excrete()
mammal.move()
--

결과
bird eat.
bird excrete.
bird fly.
mammal eat.
mammal excrete.
mammal run.
*/

let life = {
    name: 'life',
    eat() {
        console.log(this.name, 'eat.')
    },

    excrete() {
        console.log(this.name, 'excrete.')
    }
}

let animal = {
    name: 'animal',
    __proto__: life,
    move: {}
}

let bird = {
    name: 'bird',
    __proto__: animal,
    move() {
        console.log(this.name, 'fly.')
    }
}

let mammal = {
    name: 'mammal',
    __proto__: animal,
    move() {
        console.log(this.name, 'run.')
    }
}

bird.eat()
bird.excrete()
bird.move()

mammal.eat()
mammal.excrete()
mammal.move()
